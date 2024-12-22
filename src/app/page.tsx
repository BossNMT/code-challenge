"use client";

import { ImageEnum } from "@/assets";
import CardPostItem from "@/components/CardPostItem";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CardType, ResponseBlogItem } from "@/types/card.type";
import CardPostItemSkeleton from "@/components/CardPostItemSkeleton";
import { blogService } from "@/services";
import { API_IMAGE } from "@/config";
import moment from "moment";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomePage() {
  const [data, setData] = useState<CardType[]>();
  const [newDataBlog, setNewDataBlog] = useState<CardType>();
  const [meta, setMeta] = useState<Meta>();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [lengthSkeleton, setLengthSkeleton] = useState(6);

  useEffect(() => {
    setTimeout(() => {
      handleGetListBlog();
    }, 1000);
  }, [page]);

  const handleGetListBlog = async () => {
    try {
      const res = await blogService.getBlogList({
        page: page,
        limit: 7,
      });

      if (res.data) {
        const dataCard = res.data.data.map((item: ResponseBlogItem) => {
          return {
            image: `${API_IMAGE}/${item.image}`,
            catalog: item.catalog,
            title: item.title,
            avatar: `${API_IMAGE}/${item.user_image}`,
            name: item.user_name,
            date: item.createdAt,
            url: `/blog/${item.slug}`,
          };
        });

        if (page === 1) {
          setNewDataBlog(dataCard[0]);
          setData(dataCard.slice(1));
        } else {
          if (data) {
            const newData = [...JSON.parse(JSON.stringify(data)), ...dataCard];
            setData(newData);
          }
        }

        setMeta(res.data.meta);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
    setLengthSkeleton(3);
    setLoading(true);
  };

  return (
    <div>
      <h3 className="text-3xl font-semibold text-primary text-center">
        Technology
      </h3>

      <div className="flex items-center justify-center gap-4 mt-2">
        <p className="text-text">Home</p>
        <div className="w-[1px] h-4 bg-border" />
        <p className="text-secondary">Technology</p>
      </div>

      {newDataBlog ? (
        <div className="relative mt-16 w-full aspect-[14/5] rounded-xl">
          <Image
            className="w-full h-full object-cover object-top rounded-xl"
            src={newDataBlog?.image || ""}
            alt="Banner"
            width={1280}
            height={450}
          />
          <div className="absolute inset-0 w-full h-full bg-[#14162466] z-10 rounded-xl"></div>
          <div className="absolute bottom-5 left-5 lg:bottom-10 lg:left-10 z-20">
            <div className="bg-blue lg:py-1 px-3 rounded inline-block">
              <span className="text-sm lg:text-base font-medium text-primary-foreground">
                {newDataBlog?.catalog}
              </span>
            </div>
            <Link href={newDataBlog?.url || ""}>
              <h2 className="text-primary-foreground font-semibold text-sm sm:text-xl lg:text-4xl mt-2 lg:mt-4 w-[80%] lg:w-[60%]">
                {newDataBlog?.title}
              </h2>
            </Link>
            <div className="mt-2 lg:mt-6 flex items-center">
              <Image
                src={newDataBlog?.avatar || ImageEnum.avatarLight}
                alt="avatar"
                width={36}
                height={36}
                className="rounded-full w-5 h-5 lg:w-9 lg:h-9"
              />
              <p className="ml-3 font-medium text-primary-foreground text-[11px] sm:text-sm lg:text-base">
                {newDataBlog?.name}
              </p>
              <p className="ml-5 text-primary-foreground text-[11px] sm:text-sm lg:text-base">
                {moment(newDataBlog?.date).format("MMM DD, YYYY")}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative mt-16 w-full aspect-[14/5] rounded-xl">
          <Skeleton className="w-full h-full object-cover object-top rounded-xl" />

          <div className="absolute bottom-5 left-5 lg:bottom-10 lg:left-10 z-20">
            <div className="bg-blue py-1 px-3 rounded inline-block">
              <Skeleton className="text-sm font-medium text-primary-foreground" />
            </div>
            <Skeleton className="text-primary-foreground font-semibold text-4xl mt-4 w-[60%]" />
            <div className="mt-6 flex items-center">
              <Skeleton className="rounded-full w-9 h-9" />
              <Skeleton className="ml-3 font-medium text-primary" />
              <Skeleton className="ml-5 text-primary" />
            </div>
          </div>
        </div>
      )}

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {data &&
          data.map((data, index) => {
            return <CardPostItem key={index} data={data} />;
          })}
        {loading && (
          <>
            {Array.from({ length: lengthSkeleton }).map((_, index) => (
              <CardPostItemSkeleton key={index} />
            ))}
          </>
        )}
      </div>

      {meta && page < meta.totalPages && (
        <div className="flex justify-center mt-10">
          <Button
            variant="outline"
            onClick={() => {
              handleLoadMore();
            }}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

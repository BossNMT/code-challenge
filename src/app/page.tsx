"use client";

import { ImageEnum } from "@/assets";
import CardPostItem from "@/components/CardPostItem";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { CardType } from "@/types/card.type";
import CardPostItemSkeleton from "@/components/CardPostItemSkeleton";

export const metaData: Metadata = {
  title: "Home Page",
  description: "Home Page Description",
  keywords: ["Home", "Blog", "Technology", "Post", "MetaBlog"],
};
const mockData = [
  {
    image: ImageEnum.post1,
    catalog: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: ImageEnum.avatar1,
    name: "Tracey Wilson",
    date: "August 20, 2022",
    url: "#",
  },
  {
    image: ImageEnum.post2,
    catalog: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: ImageEnum.avatar2,
    name: "Tracey Wilson",
    date: "August 20, 2022",
    url: "#",
  },
  {
    image: ImageEnum.post3,
    catalog: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: ImageEnum.avatar3,
    name: "Tracey Wilson",
    date: "August 20, 2022",
    url: "#",
  },
  {
    image: ImageEnum.post1,
    catalog: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: ImageEnum.avatar1,
    name: "Tracey Wilson",
    date: "August 20, 2022",
    url: "#",
  },
  {
    image: ImageEnum.post2,
    catalog: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: ImageEnum.avatar2,
    name: "Tracey Wilson",
    date: "August 20, 2022",
    url: "#",
  },
  {
    image: ImageEnum.post3,
    catalog: "Technology",
    title:
      "The Impact of Technology on the Workplace: How Technology is Changing",
    avatar: ImageEnum.avatar3,
    name: "Tracey Wilson",
    date: "August 20, 2022",
    url: "#",
  },
];

export default function HomePage() {
  const [data, setData] = useState<CardType[]>();

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
    }, 3000);
  }, []);

  return (
    <div>
      <h3 className="text-3xl font-semibold text-primary text-center">
        Page Title
      </h3>

      <div className="flex items-center justify-center gap-4 mt-2">
        <p className="text-text">Home</p>
        <div className="w-[1px] h-4 bg-border" />
        <p className="text-secondary">Link One</p>
      </div>

      <div className="relative mt-16 w-full aspect-[14/5] rounded-xl">
        <Image
          className="w-full h-full object-cover object-top rounded-xl"
          src={ImageEnum.banner}
          alt="Banner"
          width={1280}
          height={450}
        />
        <div className="absolute inset-0 w-full h-full bg-[#14162466] z-10 rounded-xl"></div>
        <div className="absolute bottom-10 left-10 z-20">
          <div className="bg-blue py-1 px-3 rounded inline-block">
            <span className="text-sm font-medium text-primary-foreground">
              Technology
            </span>
          </div>
          <Link href={"#"}>
            <h2 className="text-primary-foreground font-semibold text-4xl mt-4 w-[60%]">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
          </Link>
          <div className="mt-6 flex items-center">
            <Image
              src={ImageEnum.avatarLight}
              alt="avatar"
              width={36}
              height={36}
            />
            <p className="ml-3 font-medium text-primary-foreground">
              Tracey Wilson
            </p>
            <p className="ml-5 text-primary-foreground">August 20, 2022</p>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-5">
        {data
          ? data.map((data, index) => {
              return <CardPostItem key={index} data={data} />;
            })
          : [1, 2, 3, 4, 5, 6].map((_, index) => {
              return <CardPostItemSkeleton key={index} />;
            })}
      </div>

      {data && data.length > 0 && (
        <div className="flex justify-center mt-10">
          <Button variant="outline">Load More</Button>
        </div>
      )}
    </div>
  );
}

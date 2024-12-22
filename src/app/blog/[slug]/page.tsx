import { ImageEnum } from "@/assets";
import Image from "next/image";

const BlogDetailPage = () => {
  return (
    <div className="w-[65%] m-auto">
      <div className="bg-blue py-1 px-3 rounded inline-block">
        <span className="text-sm font-medium text-primary-foreground">
          Technology
        </span>
      </div>

      <h1 className="text-4xl font-semibold text-primary mt-4">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>

      <div className="mt-5 flex items-center rounded-full">
        <Image
          className="rounded-full w-9 h-9"
          src={ImageEnum.avatar1}
          alt="avatar"
          width={36}
          height={36}
        />
        <p className="ml-3 font-medium text-text">
          Tracey Wilson
        </p>
        <p className="ml-5 text-secondary">August 20, 2022</p>
      </div>

      <div className="mt-8">
        <Image
          className="rounded-xl"
          src={ImageEnum.banner}
          alt="Banner"
          width={1280}
          height={450}
        />
      </div>
    </div>
  );
};

export default BlogDetailPage;

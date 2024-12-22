import { ImageEnum } from "@/assets";
import CommentItem from "@/components/CommentItem";
import CommentItemSkeleton from "@/components/CommentItemSkeleton";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

const Comment = () => {
  return (
    <div className="mt-8">
      <Divider />
      <div className="mt-4 border border-solid border-border rounded-lg p-4 pb-2">
        <div className="flex gap-3">
          <div className="w-9 h-9 rounded-full">
            <Image
              src={ImageEnum.avatar2}
              alt="avatar"
              className="w-9 h-9 rounded-full"
              width={36}
              height={36}
            />
          </div>
          <Textarea
            className="border-none p-0 focus-visible:ring-0 min-h-2 text-sm sm:text-base"
            placeholder="Add a comment"
          />
        </div>
        <div className="flex justify-end mt-2">
          <Button><span className="text-background text-sm sm:text-base">Post</span></Button>
        </div>
      </div>

      <p className="text-primary mt-6">
        <span className="font-semibold">3</span> comment
      </p>
      <div className="mt-4">
        {[1, 2, 3].map((comment) => {
          return (
            <CommentItem
              key={comment}
              comment={{
                name: "Tracey Wilson",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut in adipiscing sem, nec aliquam turpis",
                avatar: "avatar1",
                createAt: new Date(),
              }}
            />
            // <CommentItemSkeleton key={comment} />
          );
        })}
      </div>
    </div>
  );
};

export default Comment;

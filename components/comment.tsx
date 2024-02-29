import Image from "next/image";
import React from "react";
import ProfileImg from "@/assets/img/Ellipse 1.png";
import CommentProfile from "./commentProfile";

const Comment = () => {
  return (
    <div className="font-bebas">
      <h2 className="font-bold text-xl my-4">Comments</h2>
      {/* Comment Container */}
      <div>
        {/* Add Comment */}
        <div className="flex flex-col gap-4">
          <CommentProfile image={ProfileImg} name="John Doe" />
          <textarea
            className="outline-none border-b border-gray-300 w-full py-1"
            defaultValue={
              "I just tried this recipe and it was amazing! The instructions were clear and easy to follow, and the end result was delicious. I will definitely be making this again. Thanks for sharing!"
            }
            draggable={false}
          />
          <div className="flex justify-end items-center">
            <button className="bg-capital-purple text-white px-4 py-2 text-sm text-center rounded-lg">
              Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

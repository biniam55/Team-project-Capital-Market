import Image, { StaticImageData } from "next/image";
import React from "react";

interface CommentProfileProps {
  image: StaticImageData;
  name: string;
}

const CommentProfile: React.FC<CommentProfileProps> = ({ name, image }) => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <Image src={image} alt="Profile Pic" width={40} height={40} />
      <p className="text-base font-bold">{name}</p>
    </div>
  );
};

export default CommentProfile;

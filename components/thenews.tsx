import Image from "next/image";
import React from "react";

interface SingleNewsProps {
  image: any;
  heading: string;
  text: string;
}

const SingleNews: React.FC<SingleNewsProps> = ({ image, heading, text }) => {
  return (
    <div>
      <div className="relative">
        <p className="absolute top-0 text-white p-2 w-4/6">{heading}</p>
        <Image src={image} alt="News 1" />
        <div className="flex flex-col text-sm mt-2 leading-6">
          <p className="">{text}</p>
          <p className="absolute bottom-0 right-0 text-capital-green text-right -mt-5 cursor-pointer">
            Read More
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;

import React from "react";

interface NewsComponentProps {
  title: any;
  date: any;
  content: any;
}

const NewsComponent: React.FC<NewsComponentProps> = ({
  title,
  date,
  content,
}) => {
  return (
    <div className="flex flex-col gap-4 bg-capital-white p-4 rounded-md shadow-sm shadow-gray-400">
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="font-extralight text-sm">{date}</p>
      <div className="h-24 flex flex-nowrap flex-grow-0 overflow-hidden">
        {content}
      </div>
      <h2 className="text-sm text-center text-capital-purple cursor-pointer">
        Read Full News
      </h2>
    </div>
  );
};

export default NewsComponent;

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
    <div className="flex flex-col gap-2 bg-capital-white p-4 rounded-md shadow-sm h-5/6 shadow-gray-400">
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="font-extralight text-sm">{date}</p>
      <div className="h-4/6 border flex flex-nowrap flex-grow-0 border-red-400 overflow-hidden">
        {content}
      </div>
    </div>
  );
};

export default NewsComponent;

import React, { useState } from "react";

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
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="flex flex-col gap-4 bg-capital-white p-4 rounded-md shadow-sm shadow-gray-400">
      <h2 className="text-2xl font-extrabold">{title}</h2>
      <p className="font-extralight text-sm">{date}</p>
      <div className={`flex flex-col ${expanded ? 'h-auto' : 'h-24'} overflow-hidden`}>
        {content}
      </div>
      {content.length > 100 && (
        <h2 className="text-sm text-center text-capital-green cursor-pointer" onClick={toggleExpand}>
          {expanded ? 'Read Less' : 'Read Full News'}
        </h2>
      )}
    </div>
  );
};

export default NewsComponent;


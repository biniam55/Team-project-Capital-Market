import React from "react";
import NewsComponent from "./newsComponent";

const news = [
  {
    title: "News 1",
    date: "2024-02-23",
    content: "Content of News 1",
  },
  {
    title: "News 2",
    date: "2024-02-22",
    content: "Content of News 2",
  },
  {
    title: "News 3",
    date: "2024-02-21",
    content: "Content of News 3",
  },
  {
    title: "News 4",
    date: "2024-02-20",
    content: "Content of News 4",
  },
  {
    title: "News 5",
    date: "2024-02-19",
    content: "Content of News 5",
  },
  {
    title: "News 6",
    date: "2024-02-18",
    content: "Content of News 6",
  },
];
//

const News = () => {
  return (
    <div className="h-screen">
      <h2 className="font-light text-2xl">Our Latest News</h2>
      <div className="grid grid-cols-3 gap-16 h-5/6 mt-16">
        {news.map((data, index) => {
          return (
            <NewsComponent
              key={index}
              content={data.content}
              date={data.date}
              title={data.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default News;

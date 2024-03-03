'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import NewsComponent from './newsComponent'; // Import your NewsComponent
import {format} from 'date-fns/format'; // Import date formatting library

interface NewsType {
  title: string;
  description: string;
  createdAt: string;
  includeSeconds?: boolean;
}

const News = () => {
  const [newsData, setNewsData] = useState<NewsType[]>([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState<number>(6); // Initially display 6 news items

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("/api/news");
        setNewsData(res.data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchData();
  }, []);

  // Reverse the array to display the latest news first
  const reversedNewsData = [...newsData].reverse().slice(0, visibleNewsCount);

  const handleLoadMore = () => {
    setVisibleNewsCount(prevCount => prevCount + 3); // Increase visible news count by 3
  };

  const handleReset = () => {
    setVisibleNewsCount(6); // Reset visible news count to 6
  };

  return (
    <div className="min-h-screen flex flex-col">
      <h2 className="font-light text-2xl">Our Latest News</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 h-5/6 mt-16">
        {reversedNewsData.map((data, index) => (
          <NewsComponent
            key={data.createdAt} // Assuming createdAt is unique; otherwise, use a unique identifier
            content={data.description}
            date={format(new Date(data.createdAt), 'MMMM dd, yyyy h:mm a')}
            title={data.title}
          />
        ))}
      </div>
      {newsData.length > visibleNewsCount && (
        <h2
          className="text-capital-green text-sm text-center cursor-pointer mt-8"
          onClick={handleLoadMore}
        >
          Load More...
        </h2>
      )}
      <button className="text-capital-green text-sm text-center cursor-pointer mt-4" onClick={handleReset}>
        Show Original
      </button>
    </div>
  );
};

export default News;


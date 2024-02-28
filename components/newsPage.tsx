import Image from "next/image";
import React from "react";
import TradingImg from "@/assets/img/trading.png";
import News1 from "@/assets/img/news1.png";
import News2 from "@/assets/img/new2.png";
import News3 from "@/assets/img/new3.png";
import { BiLike } from "react-icons/bi";
import { SlLike } from "react-icons/sl";
import SingleNews from "./thenews";
import Comment from "./comment";

const NewsPage = () => {
  const news = [
    {
      heading: "Global Stocks Pull Back After Record Highs",
      text: "Equity markets around the world witnessed a pullback on Monday after recent strong gains, with some analysts attributing it to profit-taking",
      image: News1,
    },
    {
      heading: "Global Stocks Pull Back After Record Highs",
      text: "Equity markets around the world witnessed a pullback on Monday after recent strong gains, with some analysts attributing it to profit-taking",
      image: News2,
    },
    {
      heading: "Global Stocks Pull Back After Record Highs",
      text: "Equity markets around the world witnessed a pullback on Monday after recent strong gains, with some analysts attributing it to profit-taking",
      image: News3,
    },
  ];
  return (
    <div className="px-4 md:px-16 flex flex-col">
      <h2 className="text-4xl mt-6">History Of Capital Market In Ethiopia</h2>
      {/* Details */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-32 justify-between mt-6">
        {/* Details -> Div 1 */}
        <div className="flex flex-col md:w-3/5">
          <div className="flex flex-row justify-between text-sm mb-2">
            <p>Feb 5 2024</p>
            <p>by Kaleb Mengestu</p>
          </div>
          <Image src={TradingImg} alt="Trading Image" />
          <p className="text-sm text-right my-2 text-gray-600">
            Reading time 2 minutes{" "}
          </p>
          <div className="flex flex-col gap-6">
            <div className="">
              <h2 className="font-bold mb-4 text-lg">Introduction:</h2>
              <p>
                Welcome to the captivating world of cryptocurrencies, where
                innovation meets finance in a tale of transformative power. In
                this detailed blog post, we invite you to join us on a
                fascinating journey through the history of cryptocurrencies.
                From the groundbreaking release of Bitcoin by the
              </p>
            </div>
            <div>
              <h2 className="font-bold mb-4 text-lg">The Birth of Bitcoin:</h2>
              <p>
                A Game-Changing Innovation Our journey begins in October 2008
                when Satoshi Nakamoto published the Bitcoin white paper,
                outlining a revolutionary concept for a decentralized digital
                currency. In January 2009, the first block of
                the Bitcoin blockchain, known as the Genesis Block, was mined,
                marking the birth of cryptocurrencies. With its
                limited supply of 21{" "}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2 font-semibold text-sm text-left">
              {/* <BiLike /> */}
              <SlLike /> <p>200 Likes</p>
            </div>
          </div>
          <Comment />
        </div>
        {/* Details -> Div 2 */}
        <div className="flex flex-col gap-8 md:w-4/12">
          <div className="flex flex-row">
            <h2 className="w-1/2 bg-capital-purple text-white py-1 cursor-pointer text-center">
              Latest
            </h2>
            <h2 className="w-1/2 border-2 border-capital-purple py-1 cursor-pointer text-center">
              Trending
            </h2>
          </div>
          {/* News 1 */}

          {news.map((singleNews, index) => (
            <SingleNews
              key={index}
              heading={singleNews.heading}
              image={singleNews.image}
              text={singleNews.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;

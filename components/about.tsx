import React from "react";
import AboutImg from "@/assets/img/collabimg.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-capital-deep-blue px-4 md:px-8 items-center justify-center md:justify-between my-8 gap-4 md:gap-8">
      <div className="w-8/12 md:w-1/2">
        <Image src={AboutImg} alt="About-Image" className="w-full h-4/6" />
      </div>
      <div className="w-full md:w-1/2 text-white flex flex-col justify-center items-center px-8 gap-6">
        <h2 className="font-inter text-4xl">Capital Market</h2>
        <p className="text-sm">
          Capital markets are where savings and investments are channeled between suppliers and those in need.
          Suppliers are people or institutions with capital to lend or invest and typically include banks and
          investors. Those who seek capital in this market are businesses, governments, and individuals. Capital
          markets are composed of primary and secondary markets. The most common capital markets are the stock
          market and the bond market. They seek to improve transactional efficiencies by bringing suppliers together
          with those seeking capital and providing a place where they can exchange securities.
        </p>
        <h3 className="font-bebas text-capital-green cursor-pointer text-lg">
          READ MORE
        </h3>
      </div>
    </div>
  );
};

export default About;

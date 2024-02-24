import Image from "next/image";
import React from "react";
import HeroImage from "@/assets/img/hero.png";
import { Playfair_Display } from "next/font/google";
import Ellipse from "@/assets/img/Ellipse.png";

const Hero = () => {
  const btnStyles = `flex items-center justify-center px-8 py-2 text-sm hover:scale-110 transition-all rounded-lg text-sm`;

  return (
    <div className="flex flex-row h-5/6 items-center">
      <div className="flex flex-col gap-8 w-1/2">
        <h1 className={`text-6xl font-playfair font-semibold w-11/12`}>
          The Ethiopian Capital Market Era
        </h1>
        <p className="w-11/12 text-lg text-gray-500 font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget diam.
        </p>
        <div className="flex flex-row gap-8">
          <button className={`${btnStyles} bg-capital-purple text-white`}>
            Get Started
          </button>
          <button
            className={`${btnStyles} border text-gray-800 border-gray-800`}
          >
            News
          </button>
        </div>
      </div>
      <div className="w-1/2 md:pr-7 flex items-center justify-center relative">
        <Image
          src={Ellipse}
          alt="Ellipse"
          className="absolute left-20 w-8 h-w-8"
        />
        <Image src={HeroImage} alt="Hero_Image" className="w-8/12" />
      </div>
    </div>
  );
};

export default Hero;

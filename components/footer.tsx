import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoVideocam } from "react-icons/io5";

const Footer = () => {
  const smallText = `text-sm font-extralight`;
  return (
    <div className="w-full flex flex-col gap-4 py-4 md:gap-0 md:flex-row justify-center items-center md:px-16 mt-16 min-h-[30vh] bg-slate-200">
      {/* Icons */}
      <div className="flex flex-col w-full md:w-2/12">
        <div className="flex flex-row  justify-center gap-6">
          <FaFacebookF className="cursor-pointer" size={21} />
          <FaXTwitter className="cursor-pointer" size={21} />
          <FaInstagram className="cursor-pointer" size={21} />
          <IoVideocam className="cursor-pointer" size={21} />
        </div>
        <p className={`${smallText} text-center mt-4`}>
          &copy; 2024 Capital Market.
        </p>
      </div>
      {/* Middle */}
      <div className="flex flex-row justify-between w-full md:w-8/12">
        <div className="flex w-1/3 flex-col items-center border-l border-gray-600">
          <h2 className="text-sm font-medium">Market</h2>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className={`${smallText}`}>Addis Ababa</p>
            <p className={`${smallText}`}>Clients</p>
            <p className={`${smallText}`}>Strategy</p>
          </div>
        </div>
        <div className="flex w-1/3 flex-col items-center md:border-x border-gray-600">
          <h2 className="text-sm font-medium">Quick Links</h2>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className={`${smallText}`}>News</p>
            <p className={`${smallText}`}>Collabs</p>
            <p className={`${smallText}`}>Trends</p>
            <p className={`${smallText}`}>General News</p>
          </div>
        </div>
        <div className="flex w-1/3 flex-col items-center md:border-r border-gray-600">
          <h2 className="text-sm font-medium">Contact Us</h2>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className={`${smallText}`}>011-563-2512</p>
            <p className={`${smallText}`}>011-563-2512</p>
            <p className={`${smallText}`}>011-563-2512</p>
            <p className={`${smallText}`}>abc@gmail.com</p>
          </div>
        </div>
      </div>
      {/* Links */}
      <div className="hidden md:flex flex-col items-center w-full md:w-2/12">
        <h2 className="text-sm font-medium">Core Links</h2>
        <p className={`${smallText}`}>news</p>
      </div>
    </div>
  );
};

export default Footer;

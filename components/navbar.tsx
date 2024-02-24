"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/assets/img/logo.svg";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div
      className={`w-full flex flex-row justify-between py-4 text-sm ${
        isOpen ? "fixed top-0 left-0 px-8" : "sticky top-0"
      } transition-all`}
    >
      <div className="w-6 h-6">
        <Image src={Logo} alt="Capital Market" />
      </div>
      <div
        className={`md:static md:min-h-fit md:w-auto md:bg-transparent absolute min-h-[60vh] bg-capital-purple left-0 ${
          isOpen ? "top-0 left-0" : "top-[-1000%]"
        } w-full flex items-center z-20 px-5 text-black transition-all`}
      >
        <ul className="md:flex nav-menu flex-col md:flex-row md:gap-8 gap-16 md:items-center cursor-pointer">
          <li className="nav-item transition-all after:bg-capital-purple">
            Home
          </li>
          <li className="nav-item transition-all after:bg-capital-purple">
            Education
          </li>
          <li className="nav-item transition-all after:bg-capital-purple">
            News
          </li>
          <li className="nav-item transition-all after:bg-capital-purple">
            Profile
          </li>
          <li className="bg-capital-purple border border-transparent text-white px-5 py-1.5 text-center rounded-sm hover:text-gray-800 hover:bg-transparent hover:border-capital-purple transition-all duration-300 ease-in-out">
            <Link href={"/login"}>Login</Link>
          </li>
        </ul>
      </div>

      <div
        className="flex md:hidden flex-col gap-1 w-6 h-4 justify-between items-center cursor-pointer z-50"
        onClick={toggleMenu}
      >
        {!isOpen ? (
          <IoMdMenu className="text-capital-purple" size={25} />
        ) : (
          <IoMdClose className="text-white" />
        )}
        {/* <IoMdMenu className="text-capital-purple"/> */}
        {/* <div
          className={`h-1 w-full ${
            isOpen ? "bg-white" : "text-black"
          } bg-capital-purple`}
        ></div>
        <div
          className={`h-1 w-full ${
            isOpen ? "bg-white" : "text-black"
          } bg-capital-purple`}
        ></div>
        <div
          className={`h-1 w-full ${
            isOpen ? "bg-white" : "text-black"
          } bg-capital-purple`}
        ></div> */}
      </div>
    </div>
  );
};

export default Navbar;

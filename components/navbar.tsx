"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/assets/img/capitalLogo.png";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const { data: session }: any = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (window.scrollY > 30) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <div
      className={`w-full flex flex-row justify-between py-4 text-sm transition-all duration-200 px-8 ${
        scrolled && "bg-capital-purple md:px-[4rem] px-10"
      } ${isOpen ? "fixed top-0 left-0" : "sticky top-0"} transition-all z-50`}
    >
      <div className="w-full h-6">
        <Image src={Logo} alt="Capital Market" />
      </div>
      <div
        className={`md:static md:min-h-fit md:w-auto md:bg-transparent absolute min-h-[60vh] bg-capital-purple left-0 ${
          isOpen ? "top-0 left-0 text-white" : "top-[-1000%]"
        } w-full flex items-center justify-center z-20 px-5 text-black transition-all`}
      >
        <ul className="flex nav-menu flex-col md:flex-row gap-8 justify-center items-center cursor-pointer h-[30vh] md:h-0">
          <li
            className={`${
              scrolled && "text-white"
            } nav-item transition-all text-center after:bg-capital-purple`}
          >
            Home
          </li>
          <li
            className={`${
              scrolled && "text-white"
            } nav-item transition-all text-center after:bg-capital-purple`}
          >
            Education
          </li>
          <li
            className={`${
              scrolled && "text-white"
            } nav-item transition-all text-center after:bg-capital-purple`}
          >
            News
          </li>
          {!session?(
            <>
               <li
            className={`${
              scrolled && "text-white"
            } nav-item transition-all text-center after:bg-capital-purple`}
          >
            Profile
          </li>

          <li
            className={` bg-white md:bg-capital-purple border border-transparent text-black  px-5 py-1.5 text-center rounded-sm hover:border-white md:hover:text-gray-800 md:hover:bg-transparent md:hover:border-capital-purple transition-all duration-300 ease-in-out cursor-pointer ${
              scrolled
                ? "md:bg-capital-white md:text-capital-purple"
                : "md:text-white"
            }`}
          >
            <Link href={"/login"}>Login</Link>
          </li>
            </>
          ) :(
            <>
            {session.user?.email}
            <li>
              <button
                onClick={() => {
                  signOut();
                }}
                className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
              >
                Logout
              </button>
            </li>
          </>
          )}
         
        </ul>
      </div>

      <div
        className="flex md:hidden flex-col gap-1 w-6 h-4 justify-between items-center cursor-pointer z-50"
        onClick={toggleMenu}
      >
        {!isOpen ? (
          <IoMdMenu
            className={`${
              scrolled ? "text-capital-white" : "text-capital-purple"
            } transition-all`}
            size={30}
          />
        ) : (
          <IoMdClose className="text-white" size={30} />
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

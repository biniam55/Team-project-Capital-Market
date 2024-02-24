import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/assets/img/logo.svg";

const Navbar = () => {
  return (
    <div className="w-full flex flex-row justify-between py-4 text-sm sticky">
      <div className="w-6 h-6">
        <Image src={Logo} alt="Capital Market" />
      </div>
      {/* <div> */}
      <ul className="flex flex-row gap-8 items-center cursor-pointer">
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
      <div className="flex md:hidden flex-col gap-1 w-6 h-4 justify-between items-center cursor-pointer">
        <div className="h-1 w-full bg-capital-purple"></div>
        <div className="h-1 w-full bg-capital-purple"></div>
        <div className="h-1 w-full bg-capital-purple"></div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Navbar;

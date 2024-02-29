import React from "react";
import Logo from "@/assets/img/capitallogo.svg";
import Image from "next/image";

const SideBar = () => {
  return (
    <div className="left-0 bottom-0 w-80 bg-white min-h-screen border border-red-500 py-4">
      <div className="flex items-center justify-center">
        <Image src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default SideBar;

"use client";
import DashboardLayout from "@/components/dashboardLayout";
import SideBar from "@/components/sidebar";
import Link from "next/link";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import Portfolio from "@/assets/img/navbg.svg";
import Image from "next/image";

const Page = () => {
  const [active, setActive] = useState<number>(1);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navMidStyles = `cursor-pointer duration-300 ease-in-out p-2 hover:bg-gray-200 hover:text-black hover:rounded-full`;
  const dropDownStyles = `hover:bg-gray-400 hover:text-black transition-all font-light p-2`;
  return (
    <DashboardLayout>
      <div className="flex justify-between">
        <div className="w-full flex flex-row">
          <div className="w-10/12 flex items-center justify-center">
            <div className="flex flex-row items-center w-4/6 bg-gray-300 px-4 py-2 rounded-lg ">
              <input
                type="text"
                className="bg-transparent w-full outline-none text-sm"
                placeholder="Search"
              />
              <CiSearch />
            </div>
          </div>
          <div className="min-w-[20%] flex items-center justify-end">
            <div className="relative rounded-full  flex flex-row items-center gap-6">
              {/* Profile */}
              <div className="flex flex-row items-center justify-between gap-2">
                <Image src={Portfolio} alt="Image" />
                {/* User Name */}
                <h2 className="text-sm">Kaleb Abera</h2>
              </div>
              {/* Arrow */}
              <IoIosArrowDown
                onClick={() => setShowMenu(!showMenu)}
                size={17}
                className="cursor-pointer"
              />
              {/* Notification */}
              <IoIosNotificationsOutline size={20} />
              {/* Popup Menu */}
              {showMenu && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg py-2 w-60 text-sm justify-between z-50">
                  <div className="flex flex-col gap-1">
                    <Link className={`${dropDownStyles}`} href={"/signup"}>
                      Sign Up
                    </Link>
                    <Link className={`${dropDownStyles}`} href={"/login"}>
                      Login
                    </Link>
                    <hr />
                    <Link className={`${dropDownStyles}`} href={"/signup"}>
                      Gift Cards
                    </Link>
                    <Link className={`${dropDownStyles}`} href={"/signup"}>
                      Airbnb your Home
                    </Link>
                    <Link className={`${dropDownStyles}`} href={"/signup"}>
                      Help
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex bg-gray-300 gap-1 text-black rounded-lg overflow-hidden">
          {/* <img src={session?.user?.image} alt="" className="w-6 h-6" /> */}
          {/* <span className="px-2">{session?.user?.name}</span> */}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Page;

"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Loginwoman from "@/assets/img/loginwoman.png";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(document.getElementById("login-form"));
    const email = formData.get("email");
    const password = formData.get("password");

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return (
      <div className="flex justify-center items-center h-screen bg-blue-200">
        <h1 className="text-3xl font-semibold text-blue-800">Loading...</h1>
      </div>
    );
  }

  return (
    sessionStatus !== "authenticated" && (
      <main className="flex sm-w-full flex-col items-center justify-between overflow-hidden h-[100vh]">
        <div
          id="login"
          className="bg-white flex flex-col-reverse lg:flex-row shadow-2xl w-full  h-full"
        >
          <div className="w-full lg:w-3/5  p-full lg:p-5  ">
            <div className="text-left mt-10 invisible lg:visible  ">
              <Link href="/">
                <span className="text-mycolor">Back to</span> Home
              </Link>
            </div>

            <div className=" py-2  lg:py-20 lg:py-20 text-center ">
              <h2 className="text-3xl font-bold mb-2 ">SIGN IN</h2>
              <p className=" text-gray-600 my-3 text-xs">
                {" "}
                How to i get started lorem ipsum dolor at?
              </p>
              <form id="login-form" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center">
                  <div className="bg-gray-100 rounded-2xl w-64 p-2 flex items-center mb-3 ">
                    <FaRegUser className="text-gray-400 mr-2" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Username"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  <div className="bg-gray-100 rounded-2xl w-64 p-2 flex items-center mb-3 ">
                    <MdLockOutline className="text-gray-400 mr-2" />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="bg-gray-100 outline-none text-sm flex-1"
                    />
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                  <button
                    type="submit"
                    className="border-2 border-mycolor-500 bg-mycolor text-mycolor1 rounded-full px-12 py-2 inline-block font-semibold hover:bg-mycolor-500 hover:text-white"
                  >
                    { " " }
                    Sign In
                  </button>
                  <button className="bg-white border py-2 w-60 rounded-xl mt-5 flex justify-center items-center">
                    Sign Up with other
                  </button>
                  
                    <button className="bg-white border py-2 w-60 rounded-xl mt-5 flex justify-center items-center"
                    onClick={() => {
                      signIn("google");
                        }}>
                    
                    Sign Up with <span className="ml-1 font-bold">google</span>
                    </button>
                  
                  
                    <button  className="bg-white border py-2 w-60 rounded-xl mt-5  flex justify-center items-center"
                    onClick={() => {
                      signIn("facebook");
                    }}>

                    Sign Up with{" "}<span className="ml-1 font-bold">Facebook</span>
                    </button>
                  <div className="mt-3 text-xs flex justify-between items-center">
                    <p className=" text-gray-600  py-2 px-5 bg-white ">
                      Already have no account?
                    </p>
                    <Link href="/signup">Sign up</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            id="welcome"
            className="flex justify-center items-center w-1/2 flex-col-reverse lg:flex-row lg:w-3/5 bg-w-[200px] bg text-black py-2  lg:py-36 px-2 lg:px-12"
          >
            <div className="items-center font-poppins text-xl text-mycolor1 ml:50 lg:ml-10">
              <p className="items-center mt-5 lg:text-3xl ml-[7.5rem] md:ml-[13rem] lg:ml-[8rem]">
                Welcome Back
              </p>
              <div className="img w-[100%]  mr-10 align-center justify-center lg:h-[50vh] mt:[10%] lg:mt-[10%] ">
                <Image
                  src={Loginwoman}
                  alt="Loginwoman"
                  className=" loginwoman"
                />
              </div>
            </div>
          </div>
          <div className=" mb-5 lg:hidden">
            <Link href="/">
              <span className="text-mycolor">Back to</span> Home
            </Link>
          </div>
        </div>
      </main>
    )
  );
};

export default Login;





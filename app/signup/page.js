"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import Bicycle from "@/assets/img/bicycle.png";
import { useRouter } from "next/navigation";
// import { useSession } from "next-auth/react";
const SignUp = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const isValidEmail = (email, string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const SignUp = async (e) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };
  return (
    <main className="flex sm-w-full flex-col  items-center justify-between p-full lg:p-24 ">
      <div id="login" className="bg-white flex flex-col-reverse lg:flex-row   shadow-2xl  flex w-600 lg:w-[1140px] h-100 lg:h-[700px] max-w-4xl">
        <div className="w-full lg:w-3/5  p-full lg:p-5  ">
          <div className="text-left mt-10 invisible lg:visible  ">
            <Link href="/" >
              <span className="text-mycolor">Back to</span> Home
            </Link>
          </div>

          <div className=" py-2 lg:py-20 lg:py-20 text-center ">
            <h2 className="text-3xl font-bold mb-2 ">SIGN UP</h2>
            <p className=" text-gray-600 my-3 text-xs"> How to i get started lorem ipsum dolor at?</p>
            <div className="flex flex-col items-center">
              <div className="bg-gray-100 rounded-2xl w-64 p-2 flex items-center mb-3 ">< FaRegUser className="text-gray-400 mr-2" />
                <input type="email" name="email" placeholder="Username/email"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="bg-gray-100 rounded-2xl w-64 p-2 flex items-center mb-3 "><MdLockOutline className="text-gray-400 mr-2" />
                <input type="password" name="password" placeholder="Password"
                  className="bg-gray-100 outline-none text-sm flex-1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <button type="submit" onClick={SignUp} className="border-2 border-mycolor-500 bg-mycolor text-mycolor1 rounded-full px-12 py-2 inline-block font-semibold hover:bg-mycolor-500 hover:text-white">
                Sign Up</button>
              <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
              <a href="" className="bg-white border py-2 w-60 rounded-xl mt-5 flex justify-center items-center">
                Sign Up with other</a>
              <a href="/https://www.google.com" className="bg-white border py-2 w-60 rounded-xl mt-5 flex justify-center items-center">
                <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                  <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>Sign Up with <span className="ml-1 font-bold">google</span></a>
              <a href="/https://www.facebook.com" className="bg-white border py-2 w-60 rounded-xl mt-5  flex justify-center items-center"> <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                <path fill="#3F51B5" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"></path><path fill="#FFF" d="M34.368,25H31v13h-5V25h-3v-4h3v-2.41c0.002-3.508,1.459-5.59,5.592-5.59H35v4h-2.287C31.104,17,31,17.6,31,18.723V21h4L34.368,25z"></path>
              </svg>Sign Up with <span className="ml-1 font-bold">Facebook</span></a>
              <div className="mt-3 text-xs flex justify-between items-center">
                <p className=" text-gray-600  py-2 px-5 bg-white ">Already have an account?</p>
                <Link href="/login">Sign in</Link>

              </div>
            </div>


          </div>
        </div>

        <div className="  flex flex-col-reverse lg:flex-row w-full lg:w-3/5 bg-w-[200px]  bg text-black py-2  lg:py-36 px-2 lg:px-12">

          <div className="items-center font-poppins text-xl text-mycolor1 ml:50 lg:ml-10">

            <p className="items-center mt-5 lg:text-1xl ml-[5rem] md:ml-[13rem] lg:ml-[4rem]">Sign Up and Get The <br />Latest Information</p>
            <div className="img w-[100%]  mr-10 align-center justify-center lg:h-[50vh] mt:[10%] lg:mt-[30%] ">
              <Image src={Bicycle} alt="Bicycle" className="bicycle" />
            </div>
          </div>
        </div>
        <div className=" mb-5 lg:hidden">
          <Link href="/" >
            <span className="text-mycolor">Back to</span> Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SignUp;

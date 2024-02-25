import React from "react";
import Link from "next/link";
import LandingPageLayout from "@/components/landingLayout";
import About from "@/components/about";
import Navbar from "@/components/navbar";

const Home = () => {
  return (
    <div className="text-poppins">
      <Navbar />
      <LandingPageLayout />
      <About />
    </div>
  );
};

export default Home;

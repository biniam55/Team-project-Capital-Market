import React from "react";
import Link from "next/link";
import LandingPageLayout from "@/components/landingLayout";
import About from "@/components/about";
import Navbar from "@/components/navbar";
import NewsLetter from "@/components/newsletter";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="text-poppins">
      <Navbar />
      <LandingPageLayout />
      <About />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;

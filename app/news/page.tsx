import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NewsPage from "@/components/newsPage";
import React from "react";

const News = () => {
  return (
    <div className="font-poppins">
      <Navbar />
      <NewsPage />
      <Footer />
    </div>
  );
};

export default News;

import React from "react";
import Header from "./header";
import News from "./news";

const LandingPageLayout = () => {
  return (
    <div className="px-14 text-poppins">
      <Header />
      <News />
    </div>
  );
};

export default LandingPageLayout;

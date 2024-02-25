import React from "react";
import AboutImg from "@/assets/img/collabimg.png";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen flex flex-row bg-capital-deep-blue px-4 md:px-8 items-center justify-between my-8 gap-8">
      <div className="w-1/2">
        <Image src={AboutImg} alt="About-Image" className="w-full h-4/6" />
      </div>
      <div className="w-1/2 text-white flex flex-col justify-center items-center px-8 gap-6">
        <h2 className="font-inter text-4xl">Capital Market</h2>
        <p className="text-sm">
          Sed eius amet consectetur neque numquam velit. Eius adipisci magnam
          porro labore. Dolore est sed ipsum quisquam aliquam tempora. Non
          quisquam dolorem etincidunt quaerat dolor. Modi quiquia ipsum non
          quaerat velit. Voluptatem eius voluptatem numquam modi numquam eius
          sed. Numquam modi non numquam. Ipsum ut eius sit est magnam.
        </p>
        <h3 className="font-bebas text-capital-green cursor-pointer text-lg">
          READ MORE
        </h3>
      </div>
    </div>
  );
};

export default About;

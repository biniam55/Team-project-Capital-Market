import React from "react";

const NewsLetter = () => {
  return (
    <div className="">
      <h2 className="text-2xl md:text-4xl text-center tracking-widest text-gray-600 mb-8">
        News Letter
      </h2>
      <div className="w-full newsletter h-[30vh] flex justify-center items-center">
        <div className="w-1/2 flex flex-col gap-4 items-center justify-center">
          <h2 className="text-xl md:text-2xl text-center">
            Subscribe to our News Letter
          </h2>
          <input
            type="text"
            placeholder="Email"
            className="w-48 rounded-md px-4 py-2 bg-neutral-100/70 outline-none"
          />
          <button className="bg-black px-4 py-2 text-white rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;

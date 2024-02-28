import React from "react";

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="p-20 bg-[#CDEA68] w-full rounded-tl-3xl rounded-tr-3xl text-black "
    >
      <h1 className="text-name  font-light text-[4vw] leading-[4vw] tracking-tight">
        Ochi is a strategic partner for fast-growwing tech businesses that need
        to raise funds, sell products, explain commplex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex  gap-5 border-t-[2px] p-5 mt-14 border-[#A4C55D]">
        <div className="w-1/2">
          <h1 className="text-6xl fon-bold">Our approach:</h1>
          <button className="flex items-center gap-10 uppercase px-9  py-4 mt-6 bg-zinc-900 rounded-full text-white">
            Read More
            <button className="h-2 w-2 bg-zinc-100 rounded-full"></button>
          </button>
        </div>
        <div className="w-1/2 h-[75vh]">
          <img
            className=" object-center object-contain bg-cover rounded-2xl h-auto w-full"
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;

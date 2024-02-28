import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  motion;
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.4"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-36 px-16 ">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8.5vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mr-[1vw] rounded-md w-[8.5vw] h-[5.4vw] relative top-[0.5vw] "
                  >
                    <img
                      className="w-full bg-cover h-full rounded-md"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="flex items-center  text-9xl uppercase leading-[7vw] font-semibold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t-[1px] border-zinc-800 mt-24 flex justify-between items-center px-14 py-3">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => {
          return (
            <p className="text-md font-light traking-light leading-none">
              {item}
            </p>
          );
        })}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] border-zinc-400  rounded-full font-light font-md uppercase text-sm">
            Start The Project
          </div>
          <div className="h-10 w-10  border-[2px] flex items-center justify-center border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;

import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-16">
        <h1 className="featured text-6xl font-light">Featured Projects</h1>
      </div>
      {/* Created by Myself */}
      <div className="flex justify-between mt-20">
        <div className="dot flex items-center content-center  gap-3 ml-16">
          <div className="w-[0.8vw] h-[0.8vw] bg-green-100 rounded-full text-2xl"></div>
          <span className="font-thin">FYDE</span>
        </div>
        <div className="dot2 flex items-center gap-3  mr-20">
          <div className="w-[0.8vw] h-[0.8vw] bg-green-100 rounded-full text-2xl"></div>
          <span className="font-thin">VISE</span>
        </div>
      </div>

      <div className="px-16">
        <div className="cards w-full flex  gap-8 py-2">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-1/2 rounded-xl h-[80vh  relative"
          >
            <h1 className=" card absolute flex  left-full -translate-x-1/2 overflow-hidden -translate-y-1/2 top-1/2 z-[9] font-[chacha] text-[#CDEA68] text-8xl mt-8 leading-none tracking-tighter font-bold">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" h-full w-full bg-green-500  rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className=" cardcontainer w-1/2  rounded-xl h-[80vh]  relative"
          >
            <h1 className=" card absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] font-[chacha] text-[#CDEA68] text-8xl mt-8 leading-none tracking-tighter font-bold">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" h-full w-full bg-green-500  rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
        <div className="flex justify-between w-full  py-5">
          <div>
            <button className=" text-button px-5 ml-3 border-4  border-indigo-500 py-2 text-[1vw] bg-[#F1F1F1] rounded-full text-[black]">
              SHOPPING
            </button>
            <button className=" text-button px-5 ml-3 border-4  border-indigo-500 py-2 text-[1vw] bg-[#F1F1F1] rounded-full  font-[chacha] text-[black]">
              COPYWRITING
            </button>
            <button className=" text-button px-5 ml-3 border-4  border-indigo-500 py-2 text-[1vw] bg-[#F1F1F1] rounded-full font-[chacha] text-[black]">
              SALES DECK
            </button>
          </div>
          <div>
            <button className=" text-button px-5 ml-3 border-4  border-indigo-500 py-2 text-[1vw] bg-[#F1F1F1] rounded-full font-[chacha] text-[black]">
              AGENCY
            </button>
            <button className=" text-button px-5 ml-3 border-4  border-indigo-500 py-2 text-[1vw] bg-[#F1F1F1] rounded-full font-[chacha] text-[black]">
              COMPANY PRESENTATION
            </button>
          </div>
        </div>

        {/* 2nd part of the card */}
        <div className="flex justify-between mt-20">
          <div className="dot flex items-center content-center  gap-3 ml-2">
            <div className="w-[0.8vw] h-[0.8vw] bg-green-100 rounded-full text-2xl"></div>
            <span className="font-thin">TRAWA</span>
          </div>
          <div className="dot2 flex items-center gap-3  mr-20">
            <div className="w-[0.8vw] h-[0.8vw] bg-green-100 rounded-full text-2xl"></div>
            <span className="font-thin">PREMIUM BLEND</span>
          </div>
        </div>
        <div className="cards w-full flex  gap-8 py-2">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-1/2 rounded-xl h-[80vh  relative"
          >
            <h1 className="absolute flex overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] font-[chacha] text-[#CDEA68] text-8xl mt-8 leading-none tracking-tighter font-bold">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}{" "}
            </h1>
            <div className=" h-full w-full bg-green-500  rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer w-1/2 rounded-xl h-[80vh]  relative"
          >
            <h1 className="absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 z-[9] font-[chacha] text-[#CDEA68] text-8xl mt-8 leading-none tracking-tighter font-bold flex-row">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className=" h-full w-full bg-green-500  rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;

import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex gap-5 items-center px-14">
      <div className="cardcontainer relative w-1/2 h-[50vh]">
        <div className="card  w-full h-full bg-[#004d43] rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-3 py-1 rounded-full border-2 left-[2vw] top-[18vw] border-[#CDEA68] text-[#CDEA68]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] gap-5 flex">
        <div className="card w-full h-full bg-[#212121] rounded-xl items-center justify-center flex relative">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-4 py-1 rounded-full border-2 left-[2vw] top-[18vw]">
            &copy;RATING 5.O CLUTCH
          </button>
        </div>
        <div className="card w-full h-full bg-[#212121] rounded-xl flex items-center justify-center relative">
          <img
            className="w-24"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className=" absolute px-4 py-1 rounded-full border-2 left-[2vw] top-[18vw]">
            &copy;BUSINESS BOOTCAMP ALUMNI{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

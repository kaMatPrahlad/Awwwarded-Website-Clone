import React, { useEffect, useRef, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mousex = e.clientX;
      let mousey = e.clientY;

      let deltaX = mousex - window.innerWidth / 2;
      let deltaY = mousey - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI); //converting to radians
      setRotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen bg-[#F1F1F1] overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-full bg-cover bg-center h-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className="absolute flex gap-10 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className=" flex items-center justify-center w-[15vw] h-[15vw] rounded-full  bg-zinc-100">
            <div className="w-2/3 h-2/3 rounded-full relative bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%)  rotate(${rotate}deg)`,
                }}
                className="style line w-full h-10 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-6 h-6 rounded-full  bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full  bg-zinc-100">
            <div className="w-2/3 h-2/3 rounded-full relative bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%)  rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-6 h-6  rounded-full  bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;

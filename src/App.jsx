import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {
  let [showContent, setShowContent] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector(".svg")?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  useGSAP(() => {
    if (!showContent) return;

    gsap.to(".main", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".sky", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".bg", {
      scale: 1.1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".character", {
      scale: 1.2,
      x: "-50%",
      bottom: "-20%",
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
      duration: 2,
      delay: "-.8",
      ease: "Expo.easeInOut",
    });

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function (e) {
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", {
        x: `${xMove * 0.4}%`,
      });
      gsap.to(".sky", {
        x: xMove,
      });
      gsap.to(".bg", {
        x: xMove * 1.7,
      });
    });
  }, [showContent]);

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="150"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div className="main w-full rotate-[-5deg] scale-[1.2]">
          <div className="landing relative w-full h-screen bg-black overflow-hidden">
            <div className="navbar absolute top-0 left-0 z-[10] w-full py-4 px-4 md:py-6 md:px-6">
              <div className="logo flex gap-4 items-center">
                <div className="lines flex flex-col gap-1">
                  <div className="line w-8 h-1.5 md:w-12 bg-white"></div>
                  <div className="line w-4 h-1.5 md:w-6 bg-white"></div>
                  <div className="line w-3 h-1.5 md:w-4 bg-white"></div>
                </div>
                <h3 className="text-2xl md:text-3xl text-white">Rockstar</h3>
              </div>
            </div>

            <div className="imagesdiv relative w-full h-full">
              <img
                className="absolute sky scale-[1.3] rotate-[-15deg] top-0 left-0 w-full h-full object-cover"
                src="./sky.png"
                alt=""
              />
              <img
                className="absolute bg scale-[1.4] rotate-[-2deg] top-0 left-0 w-full h-full object-cover"
                src="./bg.png"
                alt=""
              />
              <div className="text text-white flex flex-col gap-1 md:gap-2 absolute top-16 md:top-20 left-1/2 -translate-x-1/2 scale-[1.2] rotate-[-5deg]">

                <h1 className="text-[4rem] md:text-[8rem] leading-none -ml-10 md:-ml-40">grand</h1>

                <h1 className="text-[4rem] md:text-[8rem] leading-none -ml-5 md:-ml-30">theft</h1>

                <h1 className="text-[4rem] md:text-[8rem] leading-none -ml-10 md:-ml-40">auto</h1>

              </div>
              <img className=" characte absolute -bottom-[58%] left-1/4  -translate-x-1/4  scale-[.9] rotate-[-4deg]" src="girlbg.png" alt="" />
            </div>

            <div className="btmbar text-white absolute bottom-0 left-0 w-full py-4 md:py-6 px-4 md:px-6 bg-gradient-to-t from-black to-transparent">
              <div className="flex flex-col md:flex-row md:items-center md:gap-4 gap-2">
                <div className="flex gap-2 items-center absolute bottom-6 left-6 md:static">
                  <i className="text-xl md:text-2xl ri-arrow-down-line"></i>
                  <h3 className="text-base md:text-lg font-sans">Scroll Down</h3>
                </div>
                <div className="flex justify-center">
                  <div className="flex gap-6">
                    <img className="h-[55px] px-120" src="./ps5.png" alt="PS5" />  
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-screen flex items-center justify-center bg-black">
            <div className="cntnr flex flex-col md:flex-row text-white w-full h-[85%] px-6 md:px-8">
              <div className="limg relative w-full md:w-1/2 h-1/2 md:h-full flex justify-center items-center">
                <img
                  className="scale-[1.2] max-w-[90%] md:max-w-none"
                  src="./imag.png"
                  alt=""
                />
              </div>

              <div className="rg w-full md:w-[45%] py-10 md:py-20 px-4 md:px-10">
                <h1 className="text-4xl md:text-6xl mb-2">Still Running,</h1>
                <h1 className="text-4xl md:text-6xl">Not Hunting</h1>
                <p className="mt-6 text-base md:text-lg font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus, asperiores nam, omnis inventore nesciunt a architecto eveniet saepe.
                </p>
                <p className="mt-3 text-base md:text-lg font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius illum fugit eligendi nesciunt quia similique velit excepturi soluta tenetur illo repellat consectetur laborum.
                </p>
                <p className="mt-6 text-base md:text-lg font-sans">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At eius illum fugit eligendi nesciunt quia similique velit excepturi soluta tenetur illo repellat consectetur laborum.
                </p>
                <button className="bg-yellow-500 px-6 py-3 text-black mt-8 md:mt-10 text-lg md:text-2xl font-bold rounded-lg hover:bg-yellow-400 transition">
                  Download Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

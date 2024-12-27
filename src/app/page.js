"use client";
import { useState } from "react";
import AboutSection from "./about/about";
import RippleEffect from "./ripple";
import { FaPlayCircle, FaRegPauseCircle } from "react-icons/fa";

export default function Home() {
  const [animate, setAnimate] = useState(true);

  const toggleAnimation = () => {
    setAnimate(!animate);
  };
  return (
    <>
      <RippleEffect animate={animate} />
      <main className="flex flex-col w-full relative z-0 overflow-hidden">
        <section className="p-4 relative w-full mx-auto container min-h-screen items-start justify-center flex flex-col overflow-hidden">
          <div className="p-4 w-full mx-auto container h-[70vh] items-start justify-end flex flex-col overflow-hidden">
            <div className={`-mb-[10vh] ${animate ? "animate-slide-top" : null} h-full w-[2px] bg-gradient-to-b from-zinc-950 to-zinc-900`}></div>
            <div className="p-4 flex flex-wrap gap-4 items-end justify-between w-full">
              <div className="flex flex-col">
                <h1
                  className={`font-semibold text-4xl bg-clip-text text-transparent bg-gradient-to-r to-zinc-600 from-zinc-500 pb-1`}
                >
                  Hazmed Moreno
                </h1>
                <h2 className="text-xl font-light text-zinc-400">
                  Software Engineer
                </h2>
              </div>
              <button onClick={toggleAnimation} className="fixed bottom-30 right-10 flex items-center gap-1 bg-zinc-950 p-2 z-2 text-zinc-400 hover:text-green-300 text-xs mix-blend-difference">{animate ? <FaRegPauseCircle title="Pause Animation"/> : <FaPlayCircle title="Play Animation" />}</button>
            </div>
            <div className={`-ml-[10vw] ${animate ? "animate-slide-left" : null} w-full h-[2px] bg-gradient-to-r to-zin-950 from-zinc-900`}></div>
          </div>
        </section>
        <AboutSection />
      </main>
    </>
  );
}

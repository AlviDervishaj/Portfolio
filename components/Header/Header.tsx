// Next
import { NextPage } from "next";

// React
import { useRef, useContext, useState, useCallback, useEffect } from "react";

// Components
import { ScrollContext } from "../ScrollObserver";
import { CaretDown, Logo } from "../Icons";


export const Header: NextPage = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const { scrollY }: { scrollY: number } = useContext(ScrollContext);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  let progress: number = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  };

  const loadImage = useCallback(() => {
    setIsLoaded(true);
  }, [])

  useEffect(() => {
    loadImage();
  }, [loadImage])

  return (
    <div
      ref={refContainer}
      className="min-h-screen flex flex-col items-center justify-center sticky top-0"
      style={{
        transform: `translateY(-${progress * 20}vh)`
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover -z-10"
      >
        <source
          src="/static/video/fall-infinite-loop.webm"
          type="video/webm; codecs=vp9"
        />
        <source
          src="/static/video/fall-infinite-loop.m4v"
          type="video/mp4; codecs=hvc1"
        />
      </video>
      <section className={`mt-10 block transition-opacity duration-1000 z-50 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <Logo className="w-10 h-10" stroke="#e2e8f0" />
      </section>

      <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
        <h1 className="mb-6 text-4xl xl:text-5xl">Alvi Dervishaj</h1>
        <h2 className="mb-2 text-2xl xl:text-3xl tracking-tighter z-10">
          <span>Web</span> <span>Developer</span>
        </h2>
      </div>
      <div className={`flex-grow-0 pb-20 md:pb-10 transition-all duration-1000 z-10 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} onLoad={() => loadImage()}>
        <CaretDown className="w-10 h-10" />
      </div>
    </div >
  );
};

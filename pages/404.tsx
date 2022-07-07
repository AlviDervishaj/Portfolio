// Next & React
import { useEffect, useState, useRef } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// Vanta
import DOTS from "vanta/dist/vanta.dots.min";

export default function notFoundHandler<NextPage>() {
  const [vantaEffect, setVantaEffect] = useState<any>(null);
  const vantaRef = useRef<HTMLDivElement>(null);

  // Load vanta
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(DOTS({
        el: vantaRef.current,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xff9132,
        color2: 0xff7200,
        backgroundColor: 0x11142d,
        size: 3.90,
        spacing: 47.00,
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    }
  }, [vantaEffect])

  return (<>
    <Head>
      <title>Oops ! </title>
    </Head>

    <section className="w-screen h-screen grid place-items-center">
      <div className="w-screen h-screen absolute -z-10" ref={vantaRef} />
      <div className="w-full h-auto flex flex-col gap-8 m-auto space-y-10 text-center">
        <h2 className="md:text-9xl text-5xl text-gray-100 font-wotfard"> Not Found </h2>
        <p className="md:text-2xl text-xl text-gray-100">Sorry, there is nothing at this URL.</p>

        <Link href={"/"} passHref>
          <a className="text-amber-400 drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] flex flex-row justify-center gap-2 items-center content-center md:text-2xl text-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Go Back Home
          </a>
        </Link>


      </div>
    </section>
  </>)
}

// Styling 
import "../styles/globals.css";

// React & Next
import type { AppProps } from "next/app";
import Script from "next/script";

// Components
import { ScrollObserver } from "../components/ScrollObserver";


function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Script src={"https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"} strategy={"beforeInteractive"} />
      <ScrollObserver>
        <Component {...pageProps} />
      </ScrollObserver>
    </>
  );
}

export default MyApp;

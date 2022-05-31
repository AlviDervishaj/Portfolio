// Styling 
import "../styles/globals.css";

// React & Next
import type { AppProps } from "next/app";

// Components
import { ScrollObserver } from "../components/ScrollObserver";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  );
}

export default MyApp;

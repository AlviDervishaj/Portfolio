// Styling 
import "../styles/globals.css";

// React & Next
import type { AppProps } from "next/app";

// Components
import { ScrollObserver } from "../components/ScrollObserver";


// Firebase
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


function MyApp({ Component, pageProps }: AppProps) {
  const firebaseConfig = {
    apiKey: "AIzaSyB_lxVlutGg46uBR9BuuH028Ou8pXIPSEk",
    authDomain: "portfolio-2004.firebaseapp.com",
    projectId: "portfolio-2004",
    storageBucket: "portfolio-2004.appspot.com",
    messagingSenderId: "691364403802",
    appId: "1:691364403802:web:95ca6e9042b98175795663"
  };
  const app = initializeApp(firebaseConfig);
  getAuth(app);
  getStorage(app);

  return (
    <ScrollObserver>
      <Component {...pageProps} />
    </ScrollObserver>
  );
}

export default MyApp;

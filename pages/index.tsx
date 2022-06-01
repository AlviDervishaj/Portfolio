// Next js Modules
import { NextPage } from "next";
import Head from "next/head";

// Components
import { Header } from "../components/Header";
import { About } from "../components/About";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alvi&apos;s Portfolio</title>
        <title>Alvi Dervishaj Portfolio</title>
        <meta name="title" content="Alvi Dervishaj Portfolio" />
        <meta name="description" content="Nothing more to say. Visit my page for more information :)" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio-alvi.vercel.app/" />
        <meta property="og:title" content="Alvi Dervishaj Portfolio" />
        <meta property="og:description" content="Hello ! I am Alvi Dervishaj, a frontend developer and this is my portfolio." />
        <meta property="og:image" content="https://portfolio-alvi.vercel.app/static/images/high.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio-alvi.vercel.app/" />
        <meta property="twitter:creator" content="@alvi_d1" />
        <meta property="twitter:title" content="Alvi Dervishaj Portfolio" />
        <meta property="twitter:description" content="Hello ! I am Alvi Dervishaj, a frontend developer and this is my portfolio." />
        <meta property="twitter:image" content="https://portfolio-alvi.vercel.app/static/images/high.svg" />
      </Head>
      <Header />
      <About />
    </>
  );
};

export default Home;

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
        <meta name="title" content="Alvi Dervishaj Developer Portfolio" />
        <meta name="description" content="Nothing more to say. Visit my page for more information :)" />
        <meta name="og:title" content="Alvi Dervishaj Portfolio" />
        <meta name="og:description" content="Alvi's Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="og:type" content="website" />
      </Head>
      <Header />
      <About />
    </>
  );
};

export default Home;

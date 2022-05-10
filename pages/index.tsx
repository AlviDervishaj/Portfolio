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
      </Head>
      <Header />
      <About />
    </>
  );
};

export default Home;

// Next & React
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

export default function notFoundHandler<NextPage>() {

  return (<>
    <Head>
      <title>Oops ! </title>
    </Head>

    <section className="w-screen h-screen bg-slate-800 grid place-items-center">
      <div className="w-full h-auto flex flex-col gap-8 m-auto space-y-10 text-center">
        <h2 className="md:text-9xl text-5xl text-gray-100 font-wotfard"> Not Found </h2>
        <p className="md:text-2xl text-xl text-gray-100">Sorry, there is nothing at this URL.</p>

        <Link href={"/"} passHref>
          <a className="text-amber-400 flex flex-row justify-center gap-2 items-center content-center md:text-2xl text-xl">
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

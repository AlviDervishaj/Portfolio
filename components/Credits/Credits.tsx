// React & Next
import { NextComponentType } from 'next';
import Link from "next/link";

export const Credits: NextComponentType = () => {
  return (
    <>
      <div className="w-full h-full p-4 grid grid-rows-2 gap-5 bg-gradient-to-r from-blue-500 to-sky-500">
        <h2 className="text-center tracking-wider text-sky-200">Special Thanks to </h2>
        <div className="w-full h-full flex flex-row justify-evenly gap-5 items-center content-center">
          <Link href={"https://www.flaticon.com/"} passHref>
            <a className="text-2xl text-[#70e000] font-medium opacity-100 text-center tracking-wider">Flaticon</a>
          </Link>
          <Link href={"https://coolors.co/"} passHref>
            <a className="text-2xl text-slate-200 font-medium opacity-100 text-center tracking-wider">Coolors</a>
          </Link>
        </div>
      </div>
      {/*<h2 className="tracking-wider text-center text-xl font-medium antialiased">Alvi Dervishaj</h2>*/}
    </>
  )
}

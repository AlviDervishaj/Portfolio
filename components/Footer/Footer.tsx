// Next & React
import { NextPage } from "next";
import Link from "next/link";

export const Footer: NextPage = () => {
  return (
    <footer className="w-full h-auto z-50 grid">
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
      <div className="w-full h-full flex md:flex-row flex-col-reverse justify-between items-center content-center">
        <div className="flex w-full h-auto flex-col justify-center items-center content-center py-4 md:py-0" id="logo">
          <h2 className="tracking-wider text-center text-xl font-medium antialiased">Alvi Dervishaj</h2>
          <p className="text-base text-center text-gray-600">
            © 2022-present Alvi Dervishaj. All Rights Reserved.
          </p>
        </div>
        <div className="w-full h-full flex flex-col items-start p-4 gap-4 content-start justify-center">
          <h2 className="text-xl text-gray-700">Content</h2>
          <Link href={"#projects"} passHref>
            <a className="text-base text-center tracking-wide">Projects</a>
          </Link>
          <Link href={"#aboutMe"} passHref>
            <a className="text-base tracking-wide text-center">About Me</a>
          </Link>
        </div>
        <div className="w-full h-full flex flex-col items-start p-4 gap-4 content-start justify-center">
          <h2 className="text-xl text-gray-700">Links</h2>
          <Link href={"https://twitter.com/alvi_d1"} passHref>
            <a className="text-base tracking-wide text-center">Twitter</a>
          </Link>
          <Link href={"https://github.com/AlviDervishaj"} passHref>
            <a className="text-base tracking-wide text-center">Github</a>
          </Link>
        </div>
        {/* Mobile Only */}
        {/*div className="w-full h-auto md:hidden block">
          <p className="text-base text-center text-gray-600">
            © 2022-present Alvi Dervishaj. All Rights Reserved.
          </p>
        </div>*/}
      </div>
    </footer>
  )
}

// Next & React
import { NextComponentType } from "next";
import { MouseEvent, TouchEvent } from "react";
import Link from "next/link";
import Image from "next/image";

// Components
import { Credits } from "../Credits";

export const Footer: NextComponentType = () => {
  const handleResumePreview = (e: TouchEvent | MouseEvent) => {
    e.preventDefault();
    window.open("/static/files/resume/Resume.pdf", "_blank");
  }
  return (
    <footer className="w-full h-auto z-50 grid">
      <Credits />
      <div className="w-full h-full flex md:flex-row flex-col-reverse justify-between items-center content-center">
        <div className="flex w-full h-auto flex-col justify-center items-center content-center py-4 md:py-0" id="logo">
          <Image src="/static/images/high.svg" alt="Alvi Dervishaj" width={80} height={80} />
          <p className="text-base text-center text-gray-600">
            © 2022-present Alvi Dervishaj. All Rights Reserved.
          </p>
        </div>
        <div className="w-full h-full flex flex-col items-start p-4 gap-4 content-start justify-center">
          <h2 className="text-xl text-gray-700">Content</h2>
          <Link href={"#projects"} passHref>
            <a className="text-base text-center tracking-wide">Projects</a>
          </Link>
          <button className="text-base text-center tracking-wide"
            onClick={(event: MouseEvent | TouchEvent) => handleResumePreview(event)}>My resume</button>
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
      </div>
    </footer>
  )
}

// React & Next
import { NextComponentType } from "next";
import { TouchEvent, MouseEvent } from "react";

export const Resume: NextComponentType = () => {
  const handleResumePreview = (e: TouchEvent | MouseEvent) => {
    e.preventDefault();
    window.open("/static/files/resume/Resume.pdf", "_blank");
  }
  const handleResumeDownload = (e: TouchEvent | MouseEvent) => {
    e.preventDefault();
    // create a link to download the file
    const link = document.createElement("a");
    link.href = "/static/files/resume/Resume.pdf";
    link.download = "Alvi-Dervishaj-Resume.pdf";
    // trigger the download
    link.click();
  }
  return (
    <div className="w-full h-auto p-2 flex flex-col gap-3">
      <h2 className="text-gray-800 font-wotfard text-2xl text-left font-bold md:text-center">Somewhere in this page my resume is hidden ...</h2>
      <p className="text-lg">Feel free to download my resume but do not use it for malevolent purpose !</p>
      <div className="flex flex-row justify-center gap-8 items-center relative">
        <button className="w-fit h-fit px-3 py-1 md:bg-transparent bg-sky-500 text-white md:text-gray-800 text-lg md:text-2xl tracking-wide border rounded-full
          border-sky-500 md:hover:bg-sky-400 md:hover:text-white transition-all duration-200 ease-in-out"
          onClick={(event: TouchEvent | MouseEvent) => handleResumeDownload(event)}>
          Download
        </button>
        <button className="w-fit h-fit px-3 py-1 md:bg-transparent bg-sky-500 text-white md:text-gray-800 text-lg md:text-2xl tracking-wide border rounded-full 
          border-sky-500 md:hover:bg-sky-400 md:hover:text-white transition-all duration-200 ease-in-out"
          onClick={(event: TouchEvent | MouseEvent) => handleResumePreview(event)}>
          Preview
        </button>
      </div>
    </div>
  );
}

// Next & React
import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

// Helpers
import { ExpandedInfoProps } from "./index";


export const ExpandedInfo: NextPage<ExpandedInfoProps> = ({ title, description, layout, languages, source, repo, lastCommit }) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, [])

  const handleCopyLink = () => {
    if (!navigator) return displayMessage("Could not find navigator API 😢 !")
    // check for nevigator share
    if (navigator.share) {
      navigator.share({
        title: "Look at this awesome project !",
        url: source,
      }).then(() => {
        displayMessage("Thank you for sharing ! 👻");
      }).catch((error: any) => {
        console.error(error);
      })
    }
    else {
      // copy link
      if (navigator.clipboard) {
        navigator.clipboard.writeText(source).then(() => {
          displayMessage("Link copied successfully ! 👻")
        }).catch((error: any) => {
          displayMessage("Something went wrong ! 😢");
          console.error(error);
        })
      }
    }
  }

  const displayMessage = useCallback((text: string) => {
    setMessage(text);
    setTimeout(() => {
      setMessage("")
    }, 2500);
  }, [])

  useEffect(() => {
    handleLoad();
  }, [handleLoad])

  return (
    <div className={`w-full max-h-fit transition-all ease-in-out duration-1000 relative ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <section className="md:px-8 w-full">
        {/* Website Demo */}
        <iframe className="z-50 rounded-md object-cover w-full" width={600} height={500} sandbox={"allow-scripts allow-same-origin"} src={source} title={title} loading={"lazy"}>??</iframe>
        <p className="pt-5 text-lg lg:text-xl">{description}</p>
        <div className={"flex flex-row max-w-sm pt-4 space-x-4"}>
          {
            languages.map((language: any, index: number) => <p key={index} className={`text-lg ${language.toLowerCase()}`}>{language}</p>)
          }
        </div>
        {/* Repo & Source */}
        <section className="flex flex-row md:justify-end justify-start items-center content-center gap-4 md:gap-6">
          <Link href={repo} passHref>
            <a className={"w-github h-github"} target={"_blank"} rel="noreferrer">
              <Image src={"/static/images/github.png"} alt="Github" className={"object-contain !w-github !h-github !pt-8 md:!pt-4"} width={64} height={64} />
            </a>
          </Link>
          <Link href={source} passHref>
            <a className={"w-github h-github"} target={"_blank"} rel="noreferrer">
              <Image src={"/static/images/search.png"} alt="Search" className={"object-contain !w-github !h-github !pt-8 md:!pt-4"} width={64} height={64} />
            </a>
          </Link>
          <button className="w-github h-github bg-transparent border-none" onClick={() => handleCopyLink()}>
            <Image src={"/static/images/share.png"} alt="Share" className={"object-contain !w-github !h-github !pt-8 md:!pt-4"} width={64} height={64} />
          </button>
        </section>
      </section>
      {message && <div className="block mx-auto inset-x-auto md:left-1/4 z-50 w-full md:w-1/2 h-auto p-4 shadow-lg rounded-md bg-green-500">
        <p className="text-lg md:text-xl text-white text-center">{message}</p>
      </div>}
    </div>
  )
}

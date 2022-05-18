// Next & React
import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

// Helpers
import { Email } from "../../utils/SendEmailHelpers";

// Axios
import axios, { AxiosResponse } from "axios";

export const Newsletter: NextPage = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const displayMessage = (message: string) => {
    setMessage(message);
    setIsLoading(false);
    setTimeout(() => {
      setMessage("");
    }, 4000);
  };

  const handleNewsletterSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoading(true);
    if (!username) return displayMessage("Please enter your username 😀");
    else if (!email) return displayMessage("Please enter your email 😀");
    // send email to user
    const response: AxiosResponse = await axios.post("/api/sendMail", {
      username,
      email,
    });
    const data: Email = response.data;
    setIsLoading(false);
    displayMessage(data.info);
    data.error && displayMessage(data.error);
  };

  return (
    <section className="h-auto pt-12 pb-4 container mx-auto relative">
      <div className="w-11/12 md:w-3/5 lg:w-2/5 h-auto mx-auto pb-8" id="info">
        <h2 className="text-2xl font-wotfard font-bold">
          A front-end web development newsletter !
        </h2>
        <p className="text-lg">
          I&apos;ll let you know when I make a new exciting project and share
          exclusive content now and then.
        </p>
        <small className="text-base text-sky-700 font-medium">
          No spam, unsubscribe at any time.
        </small>
      </div>
      <form className="w-full h-auto pt-2 pb-8 flex flex-col md:flex-row justify-evenly items-center content-center gap-4">
        <div className="w-11/12 md:w-full h-auto flex flex-col gap-0">
          <label htmlFor="username" className="text-gray-800 text-xl mb-2">
            First Name
          </label>
          <input
            value={username}
            onChange={(event: any) => setUsername(event.target.value)}
            id="username"
            className="text-xl text-gray-700 bg-transparent outline-0"
          />
          <div className="w-full md:h-1 h-0.5 mt-2 bg-gray-600"></div>
        </div>
        <div className="w-8 h-8" id="spacer"></div>
        <div className="w-11/12 md:w-full h-auto flex flex-col gap-0">
          <label htmlFor="email" className="text-gray-800 text-xl mb-2">
            Email
          </label>
          <input
            value={email}
            id="email"
            onChange={(event: any) => setEmail(event.target.value)}
            className="text-xl text-gray-700 bg-transparent outline-0"
          />
          <div className="w-full md:h-1 h-0.5 mt-2 bg-gray-600"></div>
        </div>
        <div className="w-11/12 h-auto flex flex-row justify-end items-center content-center pt-4">
          <button
            role={"button"}
            type={"submit"}
            className="text-lg px-3 py-2 text-slate-200 transition ease-in-out\
            hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none\
            rounded-full shadow-md md:shadow-lg bg-gradient-to-tr from-cyan-500 to-blue-500"
            onClick={(event: any) => handleNewsletterSubmit(event)}
          >
            Subscribe
          </button>
        </div>
      </form>
      {isLoading && <button className="w-full h-auto relative cursor-default" disabled>
        <Image src={"/static/images/loading.png"} className="!object-contain !p-4 animate-spin-slow" alt="loading" width={64} height={64} />
      </button>}
      {message && (
        <div className="w-11/12 m-auto bg-green-600 md:rounded-full rounded-md p-2">
          <p className="text-slate-100 tracking-wide text-center text-xl md:text-2xl">
            {message}
          </p>
        </div>
      )}
    </section>
  );
};

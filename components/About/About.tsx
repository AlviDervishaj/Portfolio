// Next
import { NextPage } from "next";

// Components
import { Projects } from "../Projects";
import { Footer } from "../Footer";
import { Newsletter } from "../Newsletter";

export const About: NextPage = () => {
  return (
    <section className="sticky top-0 flex flex-col bg-white pt-20 text-3xl md:text-4xl">
      <div className="mx-auto pl-14 px-10 text-left">
        <p className="leading-tight max-w-5xl mx-auto text-lg lg:text-4xl tracking-light">
          <strong>A young passionate web developer.</strong>
          Mainly focused on frontend using React and Next
        </p>
      </div>
      <div className="mx-auto px-8 text-center mt-28">
        <h2>Experience my world !</h2>
        <div className="mt-2">
          &ldquo;Ladies and gentlemen, the Alvi Dervishaj experience&rdquo;
        </div>
      </div>
      <Projects />
      <Newsletter />
      <Footer />
    </section>
  );
};

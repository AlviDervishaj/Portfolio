// Next & React
import { NextComponentType } from "next";

// Components
import { Sidebar } from "./index";

export const Projects: NextComponentType = () => {
  return (
    <section className="mt-10 p-8 flex flex-col md:flex-row gap-0 bg-gray-100" id="projects">
      <Sidebar />
    </section>
  );
};

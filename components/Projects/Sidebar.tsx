// Next & React
import { NextPage } from "next";
import { Project } from "../Project";

// Helpers
import { projects } from "./index";


export const Sidebar: NextPage = () => {
  return (
    <div className="w-full h-full grid gap-3">
      {
        projects.map((project) => <Project project={project} key={project.title} />)
      }
    </div>
  )

}

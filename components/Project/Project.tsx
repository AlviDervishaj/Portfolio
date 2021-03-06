// Next & React
import { useState, FC } from "react";

// Helper 
import { ProjectProps } from "./ProjectHelpers";

// Icons
import { CaretDown } from "../Icons";

// Components
import { ExpandedInfo } from "./index";

export const Project: FC<ProjectProps> = ({ project }) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <section className="w-full h-full flex flex-col space-y-4 py-5">
      <button className="flex flex-row w-full justify-start items-center content-center gap-2" onClick={() => setIsOpened(!isOpened)}>
        <CaretDown stroke={'#000'} className={`${isOpened ? 'rotate-0' : '-rotate-90'} w-6 h-6 transition-transform duration-250`} />
        <h2 className="text-lg lg:text-2xl">{project.title}</h2>
      </button>
      <ExpandedInfo {...project} isOpened={isOpened} />
    </section>
  );
};

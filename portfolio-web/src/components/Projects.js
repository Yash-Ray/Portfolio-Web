import React from "react";
import { stack } from "../extras/stack";
import StackElement from "./StackElement";
import { project } from "../extras/project";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <>
      <div className="text-white m-2 sm:m-4 lg:m-6 lg:mb-2 z-10">
        <div className="neumorphic rounded-lg p-4 h-full flex flex-col">
          <div className="text-2xl sm:text-3xl lg:text-4xl w-full text-center self-start cursor-default">
            <span className="text-green-dark hover:text-wa-green transition duration-700 ease-in-out">
              Projects
            </span>
          </div>
          <div>
            <div className="text-lg sm:text-xl lg:text-2xl">
              <span className="text-green-dark hover:text-wa-green transition-all duration-500 ease-in-out">
                Tech Stack
              </span>
            </div>
            <div className="w-full flex flex-wrap sm:p-2 items-center">
              {stack.map((e) => {
                return <StackElement data={e} />;
              })}{" "}
              <span className="sm:p-2 text-sm sm:text-base">and more...</span>
            </div>
          </div>
          <div>
            <div className="text-lg sm:text-xl lg:text-2xl my-2">
              <span className="text-green-dark hover:text-wa-green transition-all duration-500 ease-in-out">
                My Works
              </span>
            </div>
            <div className='border p-4 flex flex-wrap flex-row justify-center'>
              {
                project.map((e) => {
                  return <ProjectCard data={e} />
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

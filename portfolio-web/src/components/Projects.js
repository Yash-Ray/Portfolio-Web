import React from "react";
import { stack } from "../extras/stack";
import StackElement from "./StackElement";

function Projects() {
  return (
    <>
      <div className="text-white m-2 sm:m-4 lg:m-6 lg:mb-2 z-10 lg:h-5/6">
        <div className="neumorphic rounded-lg p-4 h-full flex flex-col">
          <div className="text-2xl sm:text-3xl lg:text-4xl w-full text-center self-start cursor-default">
            <span className="hover:text-green-dark transition duration-700 ease-in-out">
              Projects
            </span>
          </div>
          <div>
            <div className='text-lg sm:text-xl lg:text-2xl'>Tech Stack</div>
            <div className='w-full flex flex-wrap border p-2'>
                {
                    stack.map((e) => {
                        return <StackElement data={e} />
                    })
                }
            </div>
          </div>
          <div>
              <div className='text-lg sm:text-xl lg:text-2xl'>My Works</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
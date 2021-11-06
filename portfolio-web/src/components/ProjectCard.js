import React from "react";

function ProjectCard({ data }) {
  return (
    <>
      <a target="_blank" rel="noreferrer" href={`${data.link}`} className='p-0 m-0'>
        <div className="w-64 p-4 sm:w-80 h-64 group neumorphic m-4 sm:p-4 rounded-md flex flex-col">
          <div className="text-center mb-2  group-hover:text-green-dark transition-all duration-500 ease-in-out text-base sm:text-lg lg:text-xl">
            {data.name}
          </div>
          <div className="text-sm sm:text-base lg:text-base">{data.desc}</div>
          <div className='mt-4 text-sm sm:text-base lg:text-base'><span className='text-green-dark'>Tech Used :</span> {data.stack}</div>
        </div>
      </a>
    </>
  );
}

export default ProjectCard;

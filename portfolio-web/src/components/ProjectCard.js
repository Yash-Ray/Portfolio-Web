import React from "react";

function ProjectCard({ data }) {
  return (
    <>
      <a href={`${data.link}`}>
        <div className="neumorphic m-2 p-2 sm:m-4 sm:p-4">{data.name}</div>
      </a>
    </>
  );
}

export default ProjectCard;

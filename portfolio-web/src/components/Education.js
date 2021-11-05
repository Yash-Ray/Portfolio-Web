import React from "react";
import EducationCard from "./EducationCard";

function Education() {
  return (
    <>
      <div className="text-white m-2 sm:m-4 lg:m-6 lg:mb-2 z-10 lg:h-5/6">
        <div className="neumorphic rounded-lg p-4 h-full flex flex-col">
          <div className="text-2xl sm:text-3xl lg:text-4xl w-full text-center self-start cursor-default">
            <span className="hover:text-blue-mid transition duration-700 ease-in-out">
              Education
            </span>
          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center w-full lg:h-full">
            <EducationCard
              level="ICSE"
              location="Loyola School, Jamshedpur"
              duration="2008 - 2017"
              score="94.17%"
            />
            <EducationCard
              level="ISC"
              location="Loyola School, Jamshedpur"
              duration="2017 - 2019"
              score="92.4%"
            />
            <EducationCard
              level="B. Tech."
              location="Vellore Institue of Technology, Vellore"
              duration="2019 - Present"
              score="8.80 CGPA"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;

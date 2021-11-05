import React from "react";
import { GoLocation } from "react-icons/go";
import { BsCalendar3 } from "react-icons/bs";
import { FiPercent } from "react-icons/fi";

function EducationCard({ level, location, duration, score }) {
  return (
    <div className="flex flex-col neumorphic p-4 m-4 lg:p-8 rounded-lg">
      <div className="text-xl sm:text-2xl lg:text-3xl w-full text-center hover:text-blue-mid transition duration-700 ease-in-out">
        {level}
      </div>
      <div className="py-4 mt-4 flex flex-col h-full justify-center">
        <div className="flex flex-row items-center mb-4">
          <GoLocation className="mr-2" /> {location}
        </div>
        <div className="flex flex-row items-center mb-4">
          <BsCalendar3 className="mr-2" /> {duration}
        </div>
        <div className="flex flex-row items-center">
          <FiPercent className="mr-2" /> {score}
        </div>
      </div>
    </div>
  );
}

export default EducationCard;

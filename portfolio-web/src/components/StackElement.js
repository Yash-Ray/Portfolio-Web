import React from "react";

function StackElement({ data }) {
  return (
    <>
      <a target="_blank" rel="noreferrer" href={`${data.redirect}`}>
        <div className="text-sm sm:text-base neumorphic rounded-md m-2 sm:m-4 sm:mx-4 p-2 sm:p-4 sm:px-6 hover:text-green-dark transition-all duration-500 ease-in-out">
          {data.name}
        </div>
      </a>
    </>
  );
}

export default StackElement;

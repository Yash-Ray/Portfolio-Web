import React from "react";

function Loader() {
  return (
    <div
      id="page-loader" style={{ fontFamily: "Lato", fontWeight:"100"}}
      className="h-screen w-screen bg-light-sub flex justify-center items-center fixed z-50 overflow-x-hidden text-dark-main text-7xl"
    >
      <span className='animate-bounce tracking-wider'>YR</span>
    </div>
  );
}

export default Loader;

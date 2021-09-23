import React from "react";

function Loader() {
  return (
    <div
      id="page-loader"
      className="h-screen w-screen bg-pink-400 flex justify-center items-center text-4xl fixed z-50 overflow-x-hidden"
    >
      <img
        className="animate-pulse h-1/2 w-1/2"
        src="../../public/loaderimg.png"
        alt='loader-img'
      />
    </div>
  );
}

export default Loader;

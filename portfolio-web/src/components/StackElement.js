import React from "react";

function StackElement({data}) {
  return (
    <>
      <div className='neumorphic m-2 sm:m-4 mx-4 p-4'>
          <img src={`${data.logo}`} alt='logo' />
          </div>
    </>
  );
}

export default StackElement;

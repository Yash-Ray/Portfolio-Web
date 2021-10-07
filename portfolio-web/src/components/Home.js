import React, { useEffect } from "react";
import dp from "../assets/YashRay.jpg";
import gsap from "gsap";
import "../stylesheets/style.scss";

function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ dafault: { ease: "power1.out" }, repeat: -1 });
    // tl.to(".intro-content", { opacity: "1", duration: 1, delay:0.5});
    tl.to(".text", { y: "0%", duration: 0.75, delay: 0.1});
    tl.to(".text", { y: "-100%", duration: 0.75, delay: 3});
    tl.to(".text2", {y:"0%", duration:0.75, delay: 0.1});
    tl.to(".text2", {y: "-100%", duration: 0.75, delay: 3});
    tl.to(".text3", {y:"0%", duration:0.75, delay: 0.1});
    tl.to(".text3", {y: "-100%", duration: 0.75, delay: 3});
    tl.to(".text4", {y:"0%", duration:0.75, delay: 0.1});
    tl.to(".text4", {y: "-100%", duration: 0.75, delay: 3});
  });
  return (
    <div className="text-white m-2 sm:m-4 lg:m-6">
      <div className="neumorphic rounded-lg p-4 h-full flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="mx-2 flex flex-col justify-center w-full md:w-2/3 text-center md:text-left">
          <div className='anim-txt py-6'>
            <div className="hello">
              <div className="text pr-4">Hello</div>
            </div>
            <div className="hello">
              <div className="text2 pr-6">नमस्ते</div>
            </div>
            <div className="hello">
              <div className="text3 pr-6">Bonjour</div>
            </div>
            <div className="hello">
              <div className="text4 pr-6">Hola</div>
            </div>
          </div>
          <div className='intro-content w-full w-70 sm:w-2/3 break-words'>
            I'm Yash Ray, Computer Science and Engineering junior at Vellore
            Institure of Technology, Vellore.
          </div>
        </div>
        <div className="mx-2 flex justify-center w-full md:w-1/3">
          <div className="neumorphic h-1/2 w-1/2 flex justify-center items-center rounded-full overflow-hidden">
            <div>
              <img className="h-1/2 w-2/3" src={dp} alt="profile-card-dp" />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

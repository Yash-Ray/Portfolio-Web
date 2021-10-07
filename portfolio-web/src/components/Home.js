import React, { useEffect } from "react";
import dp from "../assets/YashRay.jpg";
import gsap from "gsap";
import "../stylesheets/style.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ dafault: { ease: "power1.out" }, repeat: -1 });
    tl.to(".text", { y: "0%", duration: 0.5, delay: 0.1 });
    tl.to(".text", { y: "-100%", duration: 0.5, delay: 3 });
    tl.to(".text2", { y: "0%", duration: 0.5, delay: 0.1 });
    tl.to(".text2", { y: "-100%", duration: 0.5, delay: 3 });
    tl.to(".text3", { y: "0%", duration: 0.5, delay: 0.1 });
    tl.to(".text3", { y: "-100%", duration: 0.5, delay: 3 });
    tl.to(".text4", { y: "0%", duration: 0.5, delay: 0.1 });
    tl.to(".text4", { y: "-100%", duration: 0.5, delay: 3 });
    tl.to(".text5", { y: "0%", duration: 0.5, delay: 0.1 });
    tl.to(".text5", { y: "-100%", duration: 0.5, delay: 3 });
    tl.to(".text6", { y: "0%", duration: 0.5, delay: 0.1 });
    tl.to(".text6", { y: "-100%", duration: 0.5, delay: 3 });
  });
  return (
    <div className="text-white m-2 sm:m-4 lg:m-6">
      <div className="neumorphic rounded-lg p-4 h-full flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="mx-2 flex flex-col justify-center w-full h-full md:w-2/3 text-center md:text-left">
          <div className="anim-txt hidden sm:block py-6">
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
            <div className="hello">
              <div className="text5 pr-6">Ciao</div>
            </div>
            <div className="hello">
              <div className="text6 pr-6">Aloha</div>
            </div>
          </div>
          <div className="intro-content w-full break-words">
            I'm Yash Ray, Computer Science and Engineering junior at Vellore
            Institure of Technology, Vellore.
          </div>
        </div>
        {/* profile card here */}
        <div className="m-2 flex justify-center w-full md:w-1/3">
          <div className="neumorphic w-full py-4 flex flex-col justify-center rounded-md items-center px-4 md:px-0">
            <div className="h-60 w-60 mx-4 md:mx-0">
              <img
                className="rounded-md h-full w-full"
                src={dp}
                alt="profile-card-dp"
              />
            </div>
            <div className="p-2 flex flex-wrap sm:p-4 lg:p-6">
              <div className="w-full mt-4 sm:mt-0 flex flex-row justify-center items-center text-xs sm:text-base md:text-lg text-light-main">
                <FaPhoneAlt className="text-xs sm:text-base md:text-lg mx-2" />
                +91 8210112958
              </div>
              <div className="w-full mt-4 sm:mt-0 flex flex-row justify-center items-center text-xs sm:text-base md:text-lg text-light-main">
                <GrMail className="text-xs sm:text-base md:text-lg mx-2" />
                ray.yash.08@gmail.com
              </div>
            </div>
            <div className="mt-0 sm:mt-2 w-full flex flex-col px-2">
              <div className="text-light-main text-xs w-full border text-center sm:text-base md:text-lg">
                My Socials:
              </div>
              {/* flex not working below */}
              <div classname="flex flex-row border-2 w-full mx-2 border">
                <div classname=" p-2 m-2 md:m-4">In</div>
                <div classname=" p-2 m-2 md:m-4">In</div>
                <div classname=" p-2 m-2 md:m-4">In</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React, { Fragment, useEffect, useState } from "react";
import dp from "../assets/YashRay.jpg";
import gsap from "gsap";
import "../stylesheets/style.scss";
import { FaPhoneAlt, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { Dialog, Transition } from "@headlessui/react";
import { CgClose } from "react-icons/cg";

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
  });

  let [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="text-white m-2 sm:m-4 lg:m-6">
        <div className="neumorphic rounded-lg p-4 h-full flex flex-col-reverse md:flex-row justify-center items-start">
          <div className="mx-2 flex flex-col justify-center w-full h-full md:w-2/3 text-center md:text-left py-8">
            <div className="anim-txt w-1/4 hidden sm:block py-6">
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
            </div>
            <div className="intro-content w-full break-words text-xl">
              I'm Yash Ray, Computer Science and Engineering junior at Vellore
              Institure of Technology, Vellore.
            </div>
          </div>
          {/* profile card here */}
          <div className="m-2 flex justify-center w-80 md:w-1/3">
            <div className="neumorphic w-80 py-4 flex flex-col justify-center rounded-md items-center px-4 md:px-0">
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
                <div className="text-light-main text-xs w-full text-center sm:text-base md:text-lg">
                  My Socials:
                </div>
                {/* flex not working below */}
                <div className="flex flex-row flex-wrap w-full justify-around items-center">
                  <a
                    href="https://github.com/Yash-Ray"
                    target="_blank"
                    rel="noreferrer"
                    alt="git-acc"
                  >
                    <div className="  p-2 m-2 md:m-4 hover:text-orange-mid transition duration-700 ease-in-out text-base sm:text-lg">
                      <FaGithub className="text-base sm:text-lg lg:text-3xl" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Yash-Ray"
                    target="_blank"
                    rel="noreferrer"
                    alt="git-acc"
                  >
                    <div className="  p-2 m-2 md:m-4 hover:text-orange-mid transition duration-700 ease-in-out text-base sm:text-lg">
                      <FaLinkedin className="text-base sm:text-lg lg:text-3xl" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Yash-Ray"
                    target="_blank"
                    rel="noreferrer"
                    alt="git-acc"
                  >
                    <div className="  p-2 m-2 md:m-4 hover:text-orange-mid transition duration-700 ease-in-out text-base sm:text-lg">
                      <FaInstagram className="text-base sm:text-lg lg:text-3xl" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Yash-Ray"
                    target="_blank"
                    rel="noreferrer"
                    alt="git-acc"
                  >
                    <div className="  p-2 m-2 md:m-4 hover:text-orange-mid transition duration-700 ease-in-out text-base sm:text-lg">
                      <FaInstagram className="text-base sm:text-lg lg:text-3xl" />
                    </div>
                  </a>
                  <div
                    onClick={openModal}
                    className="cursor-pointer p-2 m-2 md:m-4 hover:text-orange-mid transition duration-700 ease-in-out text-base sm:text-lg"
                  >
                    <FaInstagram className="text-base sm:text-lg lg:text-3xl" />
                  </div>
                  {/* <div className=" p-2 m-2 md:m-4">In</div>
                <div className=" p-2 m-2 md:m-4">In</div> */}
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 bg-black bg-opacity-70 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <div className="flex flex-row justify-between">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-gray-dark font-medium leading-9"
                  >
                    Sample
                  </Dialog.Title>
                  <button
                    aria-label="close button"
                    className="text-2xl text-gray-dark hover:text-red transition-all duration-300 ease-in-out"
                    onClick={closeModal}
                  >
                    <CgClose />
                  </button>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">content</p>
                  <p className="w-100 text-center text-sm">Sample</p>
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="inline-flex text-base justify-center px-10 py-2 font-medium transition-all duration-500 ease-in-out border-red text-red bg-transparent border border-orannge rounded-md hover:bg-red hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Home;

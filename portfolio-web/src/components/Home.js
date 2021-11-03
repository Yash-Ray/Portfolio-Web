import React, { Fragment, useEffect, useState } from "react";
import dp from "../assets/YashRay.png";
import gsap from "gsap";
import "../stylesheets/style.scss";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram, FaSnapchatGhost } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { CgClose } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import sc from "../assets/sc_id.png";

function Home() {
  useEffect(() => {
    const tl = gsap.timeline({ dafault: { ease: "power1.out" }, repeat: -1 });
    tl.to(".text", { y: "0%", duration: 0.5, delay: 0.1 });
    tl.to(".text", { y: "-100%", duration: 0.5, delay: 3 });
    tl.to(".text2", { y: "0%", duration: 0.5, delay: 0.1 });
    tl.to(".text2", { y: "-100%", duration: 0.5, delay: 3 });
    tl.to(".text3", { y: "0%", duration: 0.5, delay: 0.1 });
    tl.to(".text3", { y: "-100%", duration: 0.5, delay: 3 });
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
      <div className="text-white m-2 sm:m-4 lg:m-6 z-10">
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
            </div>
            <div className="text-center sm:text-left w-full break-words text-base sm:text-lg lg:text-xl">
              I'm Yash Ray, Computer Science and Engineering junior at Vellore
              Institure of Technology, Vellore. 
            </div>
          </div>
          {/* profile card here */}
          <div className="m-2 flex justify-center mx-auto w-1/3 md:w-1/3">
            <div className="neumorphic py-4 flex flex-col justify-center rounded-md items-center px-0 sm:px-4">
              <div className="h-60 w-60 mx-4 flex justify-center md:mx-0">
                <img
                  className="rounded-md h-full"
                  src={dp}
                  alt="profile-card-dp"
                />
              </div>
              <div className="mt-0 sm:mt-2 w-full flex flex-col px-2">
                <div className="flex flex-col w-full justify-around items-center">
                  {/* 1st div starts */}
                  <div className='w-full flex flex-row justify-around'>
                  <a
                    href="https://api.whatsapp.com/send?phone=918210112958"
                    target="_blank"
                    rel="noreferrer"
                    alt="git-acc"
                  >
                    <div className="p-2 m-2 md:m-4 hover:text-wa-green transition duration-700 ease-in-out text-base sm:text-lg">
                      <FaWhatsapp className="text-2xl lg:text-3xl" />
                    </div>
                  </a>
                  <a
                    href="mailto:ray.yash.08@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    alt="git-acc"
                  >
                    <div className="p-2 m-2 md:m-4 hover:text-mail-red transition duration-700 ease-in-out text-base sm:text-lg">
                      <FiMail className="text-2xl lg:text-3xl" />
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/yash-ray-cri80vt/"
                    target="_blank"
                    rel="noreferrer"
                    alt="git-acc"
                  >
                    <div className="p-2 m-2 md:m-4 hover:text-ln-blue transition duration-700 ease-in-out text-base sm:text-lg">
                      <FaLinkedin className="text-2xl lg:text-3xl" />
                    </div>
                  </a>
                  </div>
                  {/* 2nd div starts */}
                  <div className='w-full flex flex-row justify-around'>
                  <a
                    href="https://www.instagram.com/yashray_08/"
                    target="_blank"
                    rel="noreferrer"
                    alt="git-acc"
                  >
                    <div className="p-2 m-2 md:m-4 hover:text-ig-purple transition duration-700 ease-in-out text-base sm:text-lg">
                      <FaInstagram className="text-2xl lg:text-3xl" />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Yash-Ray"
                    target="_blank"
                    rel="noreferrer"
                    alt="git-acc"
                  >
                    <div className="p-2 m-2 md:m-4 hover:text-pink-500 transition duration-700 ease-in-out text-base sm:text-lg">
                      <FaGithub className="text-2xl lg:text-3xl" />
                    </div>
                  </a>
                  <a className=''>
                  <div
                    onClick={openModal}
                    className="cursor-pointer p-2 m-2 md:m-4 hover:text-sc-yellow transition duration-700 ease-in-out text-lg"
                  >
                    <FaSnapchatGhost className="text-2xl lg:text-3xl" />
                  </div>
                  </a>
                  </div>
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
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-light-sub shadow-xl rounded-md">
                <div className="flex flex-row justify-between">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl text-gray-dark font-medium leading-9"
                  >
                    Snapcode
                  </Dialog.Title>
                  <button
                    aria-label="close button"
                    className="text-2xl focus:outline-none hover:text-orange-mid text-gray-500 transition-all duration-00 ease-in-out"
                    onClick={closeModal}
                  >
                    <CgClose />
                  </button>
                </div>
                <div className="mt-2 flex justify-center">
                  <img src={sc} alt='scId' className='h-72' />
                </div>

                <div className="mt-4 flex justify-center">
                  <button
                    type="button"
                    className="flex justify-center items-center text-lg px-10 py-2 font-medium transition-all duration-500 ease-in-out border-dark-main bg-transparent border-2 border-orannge rounded-xl hover:border-orange-mid hover:text-orange-mid focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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

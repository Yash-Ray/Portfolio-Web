import React from "react";
import "./sidebar.style.css";
import "../../stylesheets/style.scss";
import { BsGithub } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { AiFillProject } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Sidebar = () => (
  <div className="sidebar-left text-light-sub p-20 pt-60 flex flex-col justify-between items-start">
    <div className="w-full">
      <Link to="/">
        <div className="element-sidebar w-4/5 p-2 px-4 sm:p-4 my-6 mx-auto flex flex-row items-center hover:text-yellow-500 transition duration-700 ease-in-out text-base sm:text-lg">
          <FaHome className="mr-2" /> <span id="home">HOME</span>
        </div>
      </Link>
      <Link to="/projects">
        <div className="element-sidebar w-4/5 p-2 px-4 sm:p-4 my-6 mx-auto flex flex-row items-center hover:text-green-600 transition duration-700 ease-in-out text-base sm:text-lg">
          <AiFillProject className="mr-2" /> PROJECTS
        </div>
      </Link>
      <div className="element-sidebar w-4/5 p-2 px-4 sm:p-4 my-6 mx-auto flex flex-row items-center hover:text-pink-600 transition duration-700 ease-in-out text-base sm:text-lg">
        <FaHome className="mr-2" /> HOME
      </div>
      <div className="element-sidebar w-4/5 p-2 px-4 sm:p-4 my-6 mx-auto flex flex-row items-center text-base sm:text-lg">
        <FaHome className="mr-2" /> HOME
      </div>
    </div>
    <div className="w-full">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://github.com/Yash-Ray/Portfolio-Web"
      >
        <div className="element-sidebar w-1/5 p-4 my-6 mx-auto flex flex-row items-center justify-center text-2xl">
          <BsGithub />
        </div>
      </a>
    </div>
  </div>
);

// Add a specific hover text color for each page name just like below line
// hover:text-red-600 transition duration-700 ease-in-out

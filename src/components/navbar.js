import React from "react";
import { Hamburger } from "../components/hamburger/hamburger.component";
import { Link } from "react-router-dom";

function Navbar({ color, home }) {
  return (
    <div className="top-0 sticky z-50 p-2 m-0 flex justify-between bg-dark-main">
      <Link to="/">
        <div
          style={{ fontFamily: "Lato", fontWeight: "300" }}
          className={`text-4xl transition duration-700 ease-in-out p-2 m-2 tracking-wide ${
            home === "yes"
              ? "bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500"
              : `text-${color}`
          }`}
        >
          YR
        </div>
      </Link>
      <div>
        <Hamburger color={color} />
      </div>
    </div>
  );
}

export default Navbar;

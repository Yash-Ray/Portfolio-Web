import React from "react";
import { Hamburger } from "../components/hamburger/hamburger.component";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="top-0 sticky z-50 p-2 m-0 flex justify-between">
      <Link to="/">
        <div
          style={{ fontFamily: "Lato", fontWeight: "100" }}
          className="text-4xl text-light-sub p-2 m-2 tracking-wide"
        >
          YR
        </div>
      </Link>
      <div>
        <Hamburger />
      </div>
    </div>
  );
}

export default Navbar;

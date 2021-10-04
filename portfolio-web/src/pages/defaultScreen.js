import React from "react";
import Navbar from "../components/navbar";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home";
import Projects from "../components/Projects";
import Education from "../components/Education";
import { useLocation } from "react-router";

function DefaultScreen() {
  const location = useLocation();

  return (
    <div className="m-0 h-screen relative z-0 top-0 bg-dark-main overflow-hidden">
      {location.pathname === "/" ? (
        <Navbar color="text-orange-mid" />
      ) : location.pathname === "/education" ? (
        <Navbar color="text-blue-mid" />
      ) : location.pathname === "/projects" ? (
        <Navbar color="text-green-dark" />
      ) : (
        <Navbar color="#DEE4E7" />
      )}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default DefaultScreen;

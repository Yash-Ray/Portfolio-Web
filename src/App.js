import React, { Component } from "react";
import "./App.css";
import DefaultScreen from "./pages/defaultScreen";
import Loader from "./pages/loadingPage";
import gsap from "gsap";
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    var tl = gsap.timeline({ dafault: { ease: "power1.out" } });
    tl.to("#page-loader", { y: "-100%", duration: 1, delay: 1.8 });
  }

  render() {
    return (
      <div className="App">
            <Loader />
            
            <DefaultScreen />          
      </div>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import DefaultScreen from "./pages/defaultScreen";
import Loader from "./pages/loadingPage";

function App() {
  return (
    <div className="App">
      <Loader />
      <DefaultScreen />
    </div>
  );
}

export default App;

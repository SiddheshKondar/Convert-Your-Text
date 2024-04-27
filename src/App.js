// import logo from './logo.svg';
import "./App.css";
import Textform from "./Components/Textform";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import React, { useState } from "react";
import Alert from "./Components/Alert";
// import {
//   BrowserRouter as Router,
//     Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [switchbtn, setswitchbtn] = useState("Enable Dark Mode");
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setmode("dark");
      setswitchbtn("Enable Light Mode");
      document.body.style.backgroundColor = "#113863";
      document.body.style.color = "white";
      showalert("Dark mode has been enabled", "success");
    } else {
      setmode("light");
      setswitchbtn("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showalert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar
        title="TextEditor"
        mode={mode}
        togglemode={togglemode}
        switchbtn={switchbtn}
      />
      <Alert alert={alert} />
{/* 
      <About /> */}

      <Textform
        heading="Enter the text to analyze"
        mode={mode}
        showalert={showalert}
      />
    </>
  );
}

export default App;

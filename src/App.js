// // App.js
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import About from "./components/About";
import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [darkMode, setDarkMode] = useState("Enable dark mode");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b3239";
      setDarkMode("Disable dark mode");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setDarkMode("Enable dark mode");
    }
  };
  return (
    <>
      <Navbar
        title="TextUTILS"
        about="About Us"
        mode={mode}
        toggleMode={toggleMode}
        enableMode={darkMode}
      />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze!" mode={mode} />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

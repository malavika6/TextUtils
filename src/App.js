// // App.js
import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Alert from "./components/Alert";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
  const [darkMode, setDarkMode] = useState("Enable dark mode");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#1b3239";
      setDarkMode("Disable dark mode");
      showAlert("Dark mode has been enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setDarkMode("Enable dark mode");
      showAlert("Light mode has been enabled", "Success");
    }
  };
  return (
    <>
      <BrowserRouter>
        {" "}
        {/* Wrap your entire app with BrowserRouter */}
        <Navbar
          title="TextUTILS"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
          enableMode={darkMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              path="/"
              element={
                <TextForm heading="Enter the text to analyze!" mode={mode} />
              }
            />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;

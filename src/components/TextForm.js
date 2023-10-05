import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            // ref={textRef}
            className="form-control"
            value={text}
            placeholder={props.placeholder}
            onChange={handleOnChange}
            id="myBox"
            rows="5"
            style={{ background: props.mode === "dark" ? "grey" : "white" }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleOnClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="conatiner my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h4>Your text summary</h4>
        <p>
          {text.split(" ").length} words {text.length} characters. <br />
        </p>
        <h4>Preview:</h4>
        <p>{text.length > 0 ? text : "Enter something to preview it here!"}</p>
      </div>
    </>
  );
}

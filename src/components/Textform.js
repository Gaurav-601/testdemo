import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState(""); //This line show's you to how to create a useState//
  const ChangeUpcase = () => {
    // console.log("Hello Gaurav. It's Working");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Congrats Its Converted!", "success");
  };

  const ChangeLOcase = () => {
    // console.log("Hello Gaurav. It's Working");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Congrats Its Converted!", "success");
  };

  const ChangeColor = () => {
    document.getElementById("mybox").style.backgroundColor = "#FF0"; //This function is use to change the background color of textarea.//
    props.showAlert("You Changed the default background!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value); //This function is give use to type something in textarea or input area.// because react js controlled language//
  };

  const clearText = () => {
    setText(""); //This function is use to clear the text//
    props.showAlert("Hey! You cleared the text", "success");
  };

  // const Copytext = () => {
  //   navigator.clipboard
  //     .writeText(`Your Text: ${text}`)
  //     .then(() => alert("Copied!"))                                   //This code is use for copy the text.  But this is long process.//
  //     .catch((error) => console.warn("Copy failed", error));
  //   alert("Please select a valid input");
  //   document.getElementById("mybox").select();
  // };

  const Copytext = () => {
    let text = document.querySelector("#mybox");
    text.select(); //This code is use for copy the text.  But this is Easy process.//
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text has beeen copied", "success");
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.lang = "en"; //This is set up your prefered language voice// https://talkrapp.com/speechSynthesis.html //this link help you to find language type//
    msg.text = text;
    window.speechSynthesis.speak(msg);

    props.showAlert("Listen What you typed here!", "success");
  };

  //Remove Extra Spaces from text//
  const Removespaces = () => {
    // console.log("Its' working.");
    let newText = text.split(/[ ]+/); //This code is use for Remove the Extra Spaces//
    setText(newText.join(""));

    props.showAlert("Extra Spaces are removed!", "success");
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="mybox"
            rows="8"
            value={text}
            placeholder="TYPE HERE"
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
          ></textarea>
        </div>
        {/* <div className=""> */}
        <div className="buttons d-flex justify-content-between gap-2">
          <button className="btn btn-primary p-1" onClick={ChangeUpcase}>
            Convert Uppercase!
          </button>

          <button className="btn btn-dark" onClick={ChangeLOcase}>
            Convert Lowercase!
          </button>

          <button className="btn btn-success" onClick={clearText}>
            Clear text
          </button>

          <button className="btn btn-success" onClick={ChangeColor}>
            Background Change
          </button>

          <button className="btn btn-success" onClick={speak}>
            Click to here
          </button>

          <button className="btn btn-success" onClick={Copytext}>
            Click to copy text
          </button>
          <button className="btn btn-success" onClick={Removespaces}>
            Remove Extra Spaces
          </button>
        </div>
      </div>
      {/* </div> */}
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h3>Your text Summary:</h3>
        <p>
          {text.split(" ").length} no.of Words and {text.length} no. of
          Chararcter
        </p>

        <p>
          {0.008 * text.split(" ").length} Time it takes to read (0.008 time it
          take per word)
        </p>
        <h2>Preview of text</h2>
        <p>{text.length > 0 ? text : "Enter some text to preview it here!"}</p>
      </div>
    </>
  );
}

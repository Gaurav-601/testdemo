// import { useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import Alert from "./components/Alert";
// import Home from "./components/Home";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { useState } from "react";
// import { Router } from "react-router-dom";

// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      {
        setMode("dark");
        document.body.style.backgroundColor = "#042743";
        showAlert("Dark mode has been enbaled", "success");
        document.title = "Hungry - Dark Mode";
        // setInterval(() => {
        //   document.title = "Hungry - Latest Website";
        // }, 2000);                                              //This code is use for blinking some text or notification in title!//

        // setInterval(() => {
        //   document.title = "Hungry - Use it now";
        // }, 1500);
      }
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#ffff";
      showAlert("Light mode has been enbaled", "success");
      document.title = "Hungry - Light Mode";
    }
  };

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "#042743";
  //     showAlert("Dark mode has been enabled", "success");
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("Light mode has been enabled", "success");
  //   }
  // };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Navbar
        title="Hungry"
        mode={mode}
        toggleMode={toggleMode}
        key={new Date()}
      />
      {/* <Home /> */}
      {/* <About bot="hello" /> */}
      {/* <Routes> */}
      {/* <Route path="/home" element={<Home />} /> */}
      {/* <Route path="/" element={./} /> */}
      {/* <Route path="/about" element={<About mode={mode} />} /> */}
      {/* <Route
          path="/textform"
          element={ */}
      {/* hii */}
      <Textform
        heading="Here the Form You can fill."
        mode={mode}
        showAlert={showAlert}
      />
      {/* }
        /> */}
      {/* </Routes> */}
    </>
    //   <Router>
    //     <Alert alert={alert} />
    //     <div className="container my-3">
    //       <Switch>
    //         {/* /users --> Component 1
    //     /users/home --> Component 2 */}
    //         <Route exact path="/about">
    //           <About mode={mode} />
    //         </Route>
    //         <Route exact path="/">
    //           <Textform

    //           />
    //         </Route>
    //       </Switch>
    //     </div>
    //   </Router>
    // </>
  );
}

export default App;

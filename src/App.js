import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Signup from "./Pages/Register";
import Signin from "./Pages/Login";
import Otp from "./Pages/Otp";
import Templates from "./Pages/Templates";
import ResumeBuilder from "./Pages/ResumeBuilder";
import Report from "./Pages/Report";
import Display from "./Pages/Display";


const App = () => {


  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="otp" element={<Otp />} />
        <Route path="login" element={<Signin />} />
        <Route path="makenew" element={<Templates />} />
        <Route path="resume" element={<ResumeBuilder />} />
        <Route path="report" element={<Report />} />
        <Route path="display" element={<Display />} />
      </Routes>
    </div>
  );
};

export default App;

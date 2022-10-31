import React from "react";
import { Route, Routes } from "react-router";
import Home from "./Pages/Home";
import Signup from "./Pages/Register";
import Signin from "./Pages/Login";
import Otp from "./Pages/Otp";
import Templates from "./Pages/Templates";
import ResumeBuilder from "./Pages/ResumeBuilder";
import Report from "./Pages/Report";
import Profile from "./Pages/Profile";
import EditProfile from "./Pages/Editprofile";

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
        <Route path="dashboard" element={<Profile />} />
        <Route path="editprofile" element={<EditProfile />} />
      </Routes>
    </div>
  );
};

export default App;

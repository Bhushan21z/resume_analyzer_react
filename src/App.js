import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router";
import Home from './Pages/Home'
import Signup from './Components/Homepage/Authentication/Login2'
import Signin from './Components/Homepage/Authentication/Login'
import Otp from './Components/Homepage/Authentication/otp'
import Templates from './Pages/Templates';
import ResumeBuilder from './Pages/ResumeBuilder';
import Report from './Pages/Report';



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
      </Routes>
    </div>
  )
}

export default App
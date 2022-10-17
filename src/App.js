import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router";
import Home from './Components/Homepage/Home'
import Signup from './Components/Homepage/Authentication/Login2'
import Signin from './Components/Homepage/Authentication/Login'


const App = () => {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Signin />} />
      </Routes>
    </div>
  )
}

export default App
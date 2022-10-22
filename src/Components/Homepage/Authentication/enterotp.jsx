import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router';
import {useLocation} from 'react-router-dom';
import axios from 'axios'

export const OtpEnter = (props) => {
  const form = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.data);

  const OtpVer = (e) => {
    e.preventDefault();
    if(form.current.otp.value===location.state.data.otp){
        const newstate = {
        name: location.state.data.name,
        user_name: "username_dummy",
        email: location.state.data.email,
        password: location.state.data.password,
    }
    console.log(newstate);
   }
   else{
    console.log("error otp");
   }
    // axios
    //     .post("https://rcoem-overflow-backend.herokuapp.com/register", newstate)
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error.response)
    //     })
  };

  return (
    <form ref={form} onSubmit={OtpVer}>
      <label>Enter Otp</label>
      <input name="otp" />
      <input type="submit" value="Send" />
    </form>
  );
};
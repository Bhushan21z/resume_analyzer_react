import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router';

export const Register = () => {
  const form = useRef();
  const navigate = useNavigate();


  const SendEmail = (e) => {
    e.preventDefault();
    form.current.password.otp="1234";
    console.log(form.current.password.otp);
  
    emailjs.sendForm('service_lzagcks', 'template_02qxrbw', form.current, 'sbN32uGf1CIlnsi0Q')
      .then((result) => {
        var formjson={
          email: form.current.to_email.value,
          otp: form.current.password.otp,
          password: form.current.password.value,
          name: form.current.to_name.value,
        }
        console.log(formjson);
        console.log(result.text);

        navigate("/otp",{state:{data:formjson}});
      }, (error) => {
          console.log(error.text);
          navigate("/signup");
      });
      
  };

  return (
    <form ref={form} onSubmit={SendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="to_email" />
      <label>Password</label>
      <input type="text" name="password" />
      <input type="submit" value="Send" />
    </form>
  );
};
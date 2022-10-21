import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Register = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

  
    emailjs.sendForm('service_lzagcks', 'template_02qxrbw', form.current, 'sbN32uGf1CIlnsi0Q')
      .then((result) => {
        var formjson={
          email: form.current.to_email.value,
          otp: form.current.otp.value,
          password: form.current.otp.value,
          name: form.current.to_name.value,
        }
        console.log(formjson);
        console.log(result.text);
        
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="to_name" />
      <label>Email</label>
      <input type="email" name="to_email" />
      <label>Password</label>
      <input name="otp" />
      <input type="submit" value="Send" />
    </form>
  );
};
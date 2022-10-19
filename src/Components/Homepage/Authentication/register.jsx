import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Register = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lzagcks', 'template_02qxrbw', form.current, 'sbN32uGf1CIlnsi0Q')
      .then((result) => {
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
      <label>Message</label>
      <textarea name="otp" />
      <input type="submit" value="Send" />
    </form>
  );
};
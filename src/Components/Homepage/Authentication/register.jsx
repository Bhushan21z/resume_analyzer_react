import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router';
import { Opacity } from '@mui/icons-material';

export const Register = () => {
  const form = useRef();
  const navigate = useNavigate();


  const SendEmail = (e) => {
    e.preventDefault();
    var random=Math.floor(100000 + Math.random() * 900000);
    var random_str=random.toString();
    form.current.otp.value=random_str;
    console.log(form.current.otp.value);
  
    emailjs.sendForm('service_lzagcks', 'template_02qxrbw', form.current, 'sbN32uGf1CIlnsi0Q')
      .then((result) => {
        var formjson={
          email: form.current.to_email.value,
          otp: form.current.otp.value,
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
      <input type="hidden" name="otp" />
      <input type="submit" value="Send" />
    </form>
  );
};
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";
import Auth from "./auth2";
import { GoogleOAuthProvider } from "@react-oauth/google";

const buttons = {
  margin: "8px 0",
  backgroundColor: "#00ABF3",
  color: "white",
  height: "50px",
  borderRadius: "5px",
  fontSize: "20px",
  position: "relative",
  left: "50%",
  transform: "translateX(-50%)",
  fontWeight: "bold",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#00ABF3",
    color: "white",
  },
};
const text = { padding: 2, margin: "8px 0" };
const paperStyle = {
  padding: 20,
  width: 600,
  margin: "0 auto",
  height: "500px",
};

export const Register = () => {
  const form = useRef();
  const navigate = useNavigate();

  const SendEmail = (e) => {
    e.preventDefault();
    var random = Math.floor(100000 + Math.random() * 900000);
    var random_str = random.toString();
    form.current.otp.value = random_str;
    console.log(form.current.otp.value);

    emailjs
      .sendForm(
        "service_lzagcks",
        "template_02qxrbw",
        form.current,
        "sbN32uGf1CIlnsi0Q"
      )
      .then(
        (result) => {
          var formjson = {
            email: form.current.to_email.value,
            otp: form.current.otp.value,
            password: form.current.password.value,
            name: form.current.to_name.value,
          };
          console.log(formjson);
          console.log(result.text);

          navigate("/otp", { state: { data: formjson } });
        },
        (error) => {
          console.log(error.text);
          navigate("/signup");
        }
      );
  };
  const headerStyle = {
    margin: 0,
    textAlign: "center",
    fontSize: "40px",
    fontWeight: "bold",
  };
  return (
    <Grid
      sx={{
        padding: "5%",
        height: "auto",
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center">
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account !
          </Typography>
        </Grid>
        <form ref={form} onSubmit={SendEmail}>
          <TextField
            style={text}
            name="to_name"
            fullWidth
            label="Name"
            placeholder="Enter your name"
          />

          <TextField
            style={text}
            name="to_email"
            fullWidth
            label="Email"
            placeholder="Enter your email"
          />
          <TextField
            style={text}
            name="password"
            type="password"
            fullWidth
            label="Password"
            placeholder="Enter your password"
          />
          {/* Hidden Field */}
          <input name="otp" type="hidden" />

          <Button
            style={buttons}
            type="submit"
            variant="contained"
            color="primary"
            value="Send"
          >
            Sign Up
          </Button>
        </form>
        {/* <Authentication /> */}
        <GoogleOAuthProvider clientId="22391200397-ilcuagqhcvspoafiqotvn7up9jlg27k4.apps.googleusercontent.com">
          <Auth />
        </GoogleOAuthProvider>
      </Paper>
    </Grid>
  );
};

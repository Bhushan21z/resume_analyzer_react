import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router";
import { Grid, Paper, TextField, Button, Typography } from "@mui/material";

const buttons = { margin: "8px 0", backgroundColor: "#00ABF3" };
const text = { padding: 2, margin: "8px 0" };
const paperStyle = {
  padding: 20,
  width: 600,
  margin: "0 auto",
  height: "500px",
  // boxShadow: "1px 0px 0px 0px black",
};

export const LoginPage = () => {
  const form = useRef();
  const navigate = useNavigate();

  const LoginUser = (e) => {
    e.preventDefault();
    var formjson = {
        email: form.current.email.value,
        password: form.current.password.value,
    }
    console.log(formjson);
  };

  const headerStyle = { margin: 0 };
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
        <form ref={form} onSubmit={LoginUser}>
          
          <TextField
            style={text}
            name="email"
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
      </Paper>
    </Grid>

    // <form ref={form} onSubmit={SendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="to_name" />
    //   <label>Email</label>
    //   <input type="email" name="to_email" />
    //   <label>Password</label>
    //   <input type="text" name="password" />
    //   <input type="hidden" name="otp" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};

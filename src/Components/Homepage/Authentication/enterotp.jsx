import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { useNavigate } from "react-router";
import { useLocation } from "react-router-dom";
import { Grid, Paper, TextField, Button } from "@mui/material";
const buttons = { margin: "8px 0", backgroundColor: "#00ABF3" };
const text = { padding: 2 };
const paperStyle = { padding: 20, width: 600, margin: "0 auto" };

export const OtpEnter = (props) => {
  const form = useRef();
  // const navigate = useNavigate();
  const location = useLocation();
  console.log(location.state.data);

  const OtpVer = (e) => {
    e.preventDefault();
    if (form.current.OTP.value === location.state.data.otp) {
      const newstate = {
        name: location.state.data.name,
        user_name: "username_dummy",
        email: location.state.data.email,
        password: location.state.data.password,
      };
      console.log(newstate);
    } else {
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
    <Grid
      sx={{
        padding: "5%",
      }}
    >
      <Paper style={paperStyle}>
        <Grid align="center">
          <h3>Enter OTP</h3>
        </Grid>
        <form ref={form} onSubmit={OtpVer}>
          <TextField
            style={text}
            name="OTP"
            fullWidth
            label="OTP"
            placeholder="Enter OTP"
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

    // <form ref={form} onSubmit={OtpVer}>

    //   <label>Enter Otp</label>
    //   <input name="otp" />
    //   <input type="submit" value="Send" />
    // </form>
  );
};

import React, { Component, useEffect } from "react";
import axios from "axios";

import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
  Modal,
  Box,
} from "@mui/material";

import setCookie from "../../../hooks/setCookie";
import getCookie from "../../../hooks/getCookie";
import removeCookie from "../../../hooks/removeCookie";
import { useNavigate } from "react-router-dom";

const buttons = { margin: "8px 0", backgroundColor: "#00ABF3" };
const text = { padding: 2, margin: "8px 0" };
var modalText;
const paperStyle = { padding: 40, height: "60vh", width: 400, margin: "10px" };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      lastpage: "/",
      message: "PROCEED",
    };
  }
  state = {
    openModal: false,
  };

  onClickButton = (e) => {
    e.preventDefault();
    this.setState({ openModal: true });
  };

  onCloseModal = () => {
    this.setState({ openModal: false });
  };

  changeHandler = (event) => {
    console.log("change handler");
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  navigation = () => {
    const navigate = useNavigate();
    useEffect(() => {
      let login = getCookie("login");
      if (login) {
        navigate("/");
      } else {
        navigate("/login");
      }
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const newstate = {
      email: this.state.email,
      password: this.state.password,
    };
    console.log(newstate);
    axios
      .post("https://rcoem-overflow-backend.herokuapp.com/login", newstate)
      .then((response) => {
        console.log(response);
        console.log("LOGGED IN");
        modalText = "Logged In Successfully !!";
        console.log(modalText);
        removeCookie("login");
        setCookie("login", JSON.stringify(newstate));

        this.setState({ openModal: true });
        //this.navigation();
      })
      .catch((error) => {
        modalText = error.response.data;
        this.state.lastpage = "/login";
        this.state.message = "TRY AGAIN";
        this.setState({ openModal: true });
      });
    e.preventDefault();
  };

  onClick(event) {
    this.submitHandler();
    this.onClickButton();
  }

  render() {
    const { email, password } = this.state;
    return (
      <Grid
        container
        sx={{
          padding: "20px",
          height: "auto",
          justifyContent: "center",
        }}
      >
        <Paper style={paperStyle}>
          <Grid align="center">
            <h2>Sign In</h2>
          </Grid>
          <form onSubmit={this.submitHandler}>
            <TextField
              style={text}
              name="email"
              value={email}
              fullWidth
              label="Email"
              placeholder="Enter your email"
              onChange={this.changeHandler}
            />
            <TextField
              style={text}
              type="password"
              name="password"
              value={password}
              fullWidth
              label="Password"
              placeholder="Enter your password"
              onChange={this.changeHandler}
            />
            <Button
              style={buttons}
              type="submit"
              variant="contained"
              color="primary"
              onClick={this.onClick}
            >
              Login
            </Button>
          </form>
          {/*<Button style={buttons} type='submit' variant='contained' color='primary' onClick={this.onClickButton}>Login</Button>*/}{" "}
          <Typography>
            <Link href="#">Forgot password?</Link>
          </Typography>
          <Typography>
            <Link href={"/signup"}>New User ?? Sign Up</Link>
          </Typography>
        </Paper>
        <Modal
          open={this.state.openModal}
          onClose={this.onCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalText}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Link
                style={{ textDecoration: "None", color: "white" }}
                href={this.state.lastpage}
              >
                <Button style={buttons} variant="contained" color="primary">
                  {this.state.message}
                </Button>
              </Link>
            </Typography>
          </Box>
        </Modal>
      </Grid>
    );
  }
}

export default Signin;

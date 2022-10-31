import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Appbar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          height: "10vh",
        }}
      >
        <Toolbar
          sx={{
            paddingTop: "30px",
          }}
        >
          <Grid container spacing={2}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Grid container xs={12}>
                <Grid item xs={4}>
                  <AdbIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                      mr: 1,
                    }}
                  />
                </Grid>

                <Grid item xs={8}>
                  <Typography
                    underline="none"
                    variant="h6"
                    color="white"
                    component="div"
                    sx={{ flexGrow: 1 }}
                  >
                    LOGO
                  </Typography>
                </Grid>
              </Grid>
            </Link>
          </Grid>

          <Link
            to={`/signup`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              variant="contained"
              sx={{
                marginRight: "20px",
                backgroundColor: "#D9D9D9",
                color: "black",
                "&:hover": {
                  backgroundColor: "#EE6C4D",
                  color: "white",
                  boxShadow: "1px 1px 1px 1px #EE6C4D",
                },
              }}
            >
              Register
            </Button>{" "}
          </Link>

          <Link
            to={`/login`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D9D9D9",
                color: "black",
                "&:hover": {
                  backgroundColor: "#EE6C4D",
                  color: "white",
                  boxShadow: "1px 1px 1px 1px #EE6C4D",
                },
              }}
            >
              Login
            </Button>
          </Link>
          <Link
            to={`/dashboard`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#D9D9D9",
                color: "black",
                "&:hover": {
                  backgroundColor: "#EE6C4D",
                  color: "white",
                  boxShadow: "1px 1px 1px 1px #EE6C4D",
                },
              }}
            >
              Profile
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

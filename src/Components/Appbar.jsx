import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { ButtonGroup, Grid } from "@mui/material";
import { Link } from "react-router-dom";

const btn = {
  marginRight: "20px",
  backgroundColor: "#D9D9D9",
  color: "black",
  "&:hover": {
    backgroundColor: "#EE6C4D",
    color: "white",
    boxShadow: "1px 1px 1px 1px #EE6C4D",
  },
};

const buttons = ["Login", "Register", "Profile"];

export default function Appbar() {
  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
          height: "10vh",
          boxShadow: "none",
          paddingTop: "15px",
          px: 3,
        }}
      >
        <Toolbar>
          <Grid container spacing={2}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <Grid container xs={12}>
                <Grid item xs={4}>
                  <AdbIcon
                    sx={{
                      mr: 1,
                      fontSize: "40px",
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

          <ButtonGroup variant="text" aria-label="text button group">
            {buttons.map((button) => (
              <Link
                to={`/${button.toLowerCase()}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" sx={btn}>
                  {button}
                </Button>
              </Link>
            ))}
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

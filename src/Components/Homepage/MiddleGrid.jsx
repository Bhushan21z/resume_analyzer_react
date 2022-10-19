import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import banner1 from "../../Assets/banner-img.png";
import banner2 from "../../Assets/banner2.png";

const Item2 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  margin: theme.spacing(2),
  textAlign: "center",
  color: "#fff",
  height: "80vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#00ABF3",
  boxShadow: "none",
}));

const Item1 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  margin: theme.spacing(2),
  textAlign: "center",
  color: "#fff",
  height: "80vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  paddingLeft: "20px",
  backgroundColor: "#00ABF3",
  boxShadow: "none",
}));

const Item3 = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  margin: theme.spacing(2),
  textAlign: "center",
  color: "#fff",
  height: "80vh",
  width: "100%",
  display: "flex",
  flexDirection: "column-reverse",
  paddingRight: "20px",
  backgroundColor: "#00ABF3",
  alignItems: "flex-end",
  boxShadow: "none",
}));

export default function MiddleGrid() {
  return (
    <div style={{ backgroundColor: "#00ABF3" }}>
      <Container
        // maxWidth="xl"
        sx={
          {
            //   height: "90vh",
            //   width: "100vw",
            // backgroundColor: "#00ABF3",
          }
        }
      >
        {/*  Middle-Grid */}

        <Grid container spacing={0}>
          <Grid item xs={5.2}>
            <Item1>
              <Box
                component="img"
                sx={{
                  height: 300,
                  width: 400,
                  maxHeight: { xs: 233, md: 300 },
                  maxWidth: { xs: 350, md: 400 },
                }}
                alt="The house from the offer."
                src={banner1}
              ></Box>
              <Box
                sx={{
                  // backgroundColor :'purple',
                  marginTop: 17,
                  fontSize: 35,
                  tabSize: 4,
                }}
              >
                NO RESUME ? <br></br>
                Do not Worry we Got you Covered
              </Box>
            </Item1>
          </Grid>

          <Grid item xs={1.5}>
            <Item2>
              <Link
                to="/report"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "150px",
                    marginBottom: "20px",
                    backgroundColor: "#D9D9D9",
                    color: "black",
                  }}
                >
                  {/* <input type="file"/> */}
                  Upload
                </Button>
              </Link>
              <Link
                to="/makenew"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button
                  variant="contained"
                  sx={{
                    width: "150px",
                    marginTop: "20px",
                    backgroundColor: "#D9D9D9",
                    color: "black",
                  }}
                >
                  Make New
                </Button>
              </Link>
            </Item2>
          </Grid>

        <Grid item xs={5.2}>
          <Item3>
            <Box
              component="img"
              sx={{
                height: 300,
                width: 400,
                maxHeight: { xs: 233, md: 300 },
                maxWidth: { xs: 350, md: 400 },
              }}
              alt="The house from the offer."
              src={banner2}
            ></Box>
            <Box
              sx={{
                // backgroundColor :'purple',
                marginBottom: 17,
                fontSize: 35,
                tabSize: 4,
              }}
            >
              NO RESUME ? <br></br>
              Do not Worry we Got you Covered
            </Box>
          </Item3>
        </Grid>
      </Grid>
    </Container>
  );
}

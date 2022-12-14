import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Item from "@mui/material/ListItem";
import { BiLinkExternal } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import logo from "../Assets/resume_logo.png";
import "../index.css";

export default function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        bgcolor="black"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4}>
              <Box>
                <h1>Resume Analyzer</h1>{" "}
              </Box>
              <Box
                component="img"
                sx={{
                  height: 200,
                  width: 200,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src={logo}
              ></Box>
            </Grid>

            <Grid item xs={10} sm={4}>
              <Box borderBottom={1}>
                <BiLinkExternal /> Links
              </Box>
              <Box>
                <Item>
                  <Link
                    href="/"
                    color="inherit"
                    sx={{ textDecoration: "None" }}
                  >
                    Contact us
                  </Link>
                </Item>
              </Box>
              <Box>
                <Item>
                  <Link
                    href="/"
                    color="inherit"
                    sx={{ textDecoration: "None" }}
                  >
                    Careers
                  </Link>
                </Item>
              </Box>
              <Box>
                <Item>
                  <Link
                    href="/"
                    color="inherit"
                    sx={{ textDecoration: "None" }}
                  >
                    FAQs
                  </Link>
                </Item>
              </Box>
              <Box>
                <Item>
                  <Link
                    href="/"
                    color="inherit"
                    sx={{ textDecoration: "None" }}
                  >
                    Teams
                  </Link>
                </Item>
              </Box>
              <Box>
                <Item>
                  <Link
                    href="/"
                    color="inherit"
                    sx={{ textDecoration: "None" }}
                  >
                    About us
                  </Link>
                </Item>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box borderBottom={1}>
                <IoIosPeople /> Links
              </Box>
              <Box>
                <Item>
                  <Link
                    href="/"
                    color="inherit"
                    sx={{ textDecoration: "None" }}
                  >
                    Contact us
                  </Link>
                </Item>
              </Box>
              <Box>
                <Item>
                  <Link
                    href="/"
                    color="inherit"
                    sx={{ textDecoration: "None" }}
                  >
                    Careers
                  </Link>
                </Item>
              </Box>
              <Box>
                <Item>
                  <Link
                    href="/"
                    color="inherit"
                    sx={{ textDecoration: "None" }}
                  >
                    FAQs
                  </Link>
                </Item>
              </Box>
              <Box>
                <Item>
                  <Link
                    href="/"
                    color="inherit"
                    sx={{ textDecoration: "None" }}
                  >
                    Teams
                  </Link>
                </Item>
              </Box>
              <Box>
                <Item>
                  <Link
                    href="/"
                    color="inherit"
                    sx={{ textDecoration: "None" }}
                  >
                    About us
                  </Link>
                </Item>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}

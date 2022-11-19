import React, { useState } from "react";
import "./tempstyle.css";
import Grid from "@mui/material/Grid";
import { Divider, Typography } from "@mui/material";
import { fontStyle } from "@mui/system";

const Styles = {
  subheading: {
    fontWeight: "bold",
    fontSize: "15px",
    color: "#003f88",
    mt: 3,
    mb: 1,
  },

  workexp1: {
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
  },

  workexp2: {
    fontSize: "12px",
    color: "#6c757d",
    mr: 2,

    fontWeight: "bold",
  },
  workexp3: {
    fontSize: "12px",
    color: "#6c757d",
    mb: 1,
    fontWeight: "bold",
  },
  workexp4: {
    fontSize: "12px",
    color: "#6c757d",
    mr: 1,
  },
};

function Template() {
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          py: 4,
          px: 3,
          width: "587px",
          height: "834px",
        }}
      >
        {/* --------------------------Left Grid-------------------------- */}
        <Grid item xs={8}>
          {/* ----------------------Heading---------------------- */}
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "30px",
              color: "#003f88",
            }}
          >
            First Name
          </Typography>
          <Typography
            sx={{ fontSize: "15px", color: "#6c757d", fontWeight: "bold" }}
          >
            Data Scientist
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              color: "#6c757d",
              letterSpacing: "0px",
            }}
          >
            Data Scientist with three years of experience in analyzing large
            data sets and coming up with data-driven insights for early-stage
            technology companies. Worked in teams of 8-12 team members.
          </Typography>
          {/* ------------------- Work Experience ------------------- */}

          <Typography sx={Styles.subheading}>Work Experience</Typography>
          <Divider sx={{ width: "80%", mt: 1, mb: 2 }} />

          <Grid container sx={{ my: 2 }}>
            <Grid container justifyContent="space-between">
              <Typography sx={Styles.workexp1}>Data Scientist</Typography>
              <Typography sx={Styles.workexp2}>2019 - Present</Typography>
            </Grid>
            <Typography sx={Styles.workexp3}>
              Resume Worded, New York, NY
            </Typography>
            <Typography sx={Styles.workexp4}>
              ● Launched Miami office with lead Director and recruited a new
              team of 10 employees; grew office revenue by 200% in first nine
              months (representing 20% of company revenue). Led redesign of
              mobile app and website. <br />
              ● Led the first major effort to A/B test the company's e-commerce
              sales page and optimize it for customer acquisition; resulted in a
              7.5% increase in conversions <br />
            </Typography>
          </Grid>

          <Grid container sx={{ my: 2 }}>
            <Grid container justifyContent="space-between">
              <Typography sx={Styles.workexp1}>Data Scientist</Typography>
              <Typography sx={Styles.workexp2}>2019 - Present</Typography>
            </Grid>
            <Typography sx={Styles.workexp3}>
              Resume Worded, New York, NY
            </Typography>
            <Typography sx={Styles.workexp4}>
              ● Launched Miami office with lead Director and recruited a new
              team of 10 employees; grew office revenue by 200% in first nine
              months (representing 20% of company revenue). Led redesign of
              mobile app and website. <br />
              ● Led the first major effort to A/B test the company's e-commerce
              sales page and optimize it for customer acquisition; resulted in a
              7.5% increase in conversions <br />
            </Typography>
          </Grid>
          <Grid container sx={{ my: 2 }}>
            <Grid container justifyContent="space-between">
              <Typography sx={Styles.workexp1}>Data Scientist</Typography>
              <Typography sx={Styles.workexp2}>2019 - Present</Typography>
            </Grid>
            <Typography sx={Styles.workexp3}>
              Resume Worded, New York, NY
            </Typography>
            <Typography sx={Styles.workexp4}>
              ● Launched Miami office with lead Director and recruited a new
              team of 10 employees; grew office revenue by 200% in first nine
              months (representing 20% of company revenue). Led redesign of
              mobile app and website. <br />
              ● Led the first major effort to A/B test the company's e-commerce
              sales page and optimize it for customer acquisition; resulted in a
              7.5% increase in conversions <br />
            </Typography>
          </Grid>
        </Grid>

        {/* ---------------------------------Right Grid--------------------------  */}
        <Grid
          item
          xs={4}
          sx={{
            backgroundColor: "#edede9",
          }}
        >
          {/* ------------------------ Contact ------------------------ */}
          <Grid container sx={{ my: 3, justifyContent: "center" }}>
            <Typography sx={{ fontSize: "15px" }}>Contact</Typography>
            <Divider sx={{ width: "80%", my: 1, color: "black" }} />
            <Typography sx={{ fontSize: "12px", color: "#6c757d", mx: 1 }}>
              • Denver, OH <br />
              • +1-234-456-789
              <br />
              • email@resumeworded.com <br />
              • linkedin.com/in/username
              <br />
              • github.com/resumeworded
              <br />
            </Typography>
          </Grid>

          {/* ------------------------ Skills ------------------------ */}

          <Grid container sx={{ my: 3, justifyContent: "center" }}>
            <Typography sx={{ fontSize: "15px" }}>Skills</Typography>
            <Divider sx={{ width: "90%", my: 1, color: "black" }} />
            <Typography sx={{ fontSize: "12px", color: "#6c757d", mx: 1 }}>
              • Python <br />
              • R <br />
              • SQL <br />
              • Tableau <br />
              • Machine Learning <br />
              • Deep Learning <br />
            </Typography>
          </Grid>

          {/* ------------------------ Education ------------------------ */}

          <Grid container sx={{ my: 3, justifyContent: "center" }}>
            <Typography sx={{ fontSize: "15px" }}>Education</Typography>
            <Divider sx={{ width: "80%", my: 1, color: "black" }} />
            <Typography
              sx={{
                fontSize: "12px",
                color: "#6c757d",
                mx: 1,
                fontWeight: "bold",
              }}
            >
              Resume Worded University{" "}
            </Typography>
            <Typography sx={{ fontSize: "12px", color: "#6c757d", mx: 2 }}>
              <li> Bachelor of Engineering </li>
              <li>
                {" "}
                Major in Computer Science Minors in Mathematics and Statistics
                Boston, MA — May 2018
              </li>
              <li>
                Awards: Resume Worded Teaching Fellow (only 5 awarded to class),
                Dean’s List 2012 (Top 10%)
              </li>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Template;

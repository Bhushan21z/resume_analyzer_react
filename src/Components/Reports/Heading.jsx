import React from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import pic from "../../Assets/mike.jpg";

const Heading = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          backgroundColor: "#00ABF3",
          justifyContent: "center",
          alignItems: "center",
          padding: "1% 3%",
        }}
      >
        <Grid
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          sx={{
            backgroundColor: "white",
            height: "300px",
            padding: "2%",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
          }}
        >
          <Grid item xs={3}>
            <Avatar sx={{ width: "60%", height: "80%", borderRadius: "10px" }}>
              <img
                alt="..."
                className="img-fluid rounded shadow-lg"
                src={pic}
                style={{ width: "100%", height: "100%" }}
              />
            </Avatar>
          </Grid>

          <Grid item xs={6}>
            <h1>Congratulations</h1>
            Your Resume is Awesome ! <br />
            Resume Score : 80% <br />
            Feedback: Require some changes in your resume to make it more
            attractive.
          </Grid>

          <Grid item xs={3}>
            <Grid
              container
              sx={{
                border: "1px solid #00ABF3",
                justifyContent: "center",
                alignItems: "center",
                height: "70%",
                width: "50%",
                borderRadius: "50%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#00ABF3",
                  fontWeight: "bold",
                  fontSize: "50px",
                  textAlign: "center",
                  lineHeight: "1.2",
                  letterSpacing: "-0.02em",
                }}
              >
                80%
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Heading;

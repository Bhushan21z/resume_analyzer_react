import * as React from "react";
import { Grid, Button, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import pic from "../../Assets/mike.jpg";
import { Link } from "react-router-dom";
const Item = {
  backgroundColor: "white",
  color: "black",
  minHeight: "600px",
  height: "auto",
  borderRadius: "10px",
  my: 3,
  mx: 1,
  padding: 2,
  justifyContent: "center",
};

const info = [
  {
    Name: "Lorem Ipsum",
  },
  {
    Position: "Backend Developer",
  },
  {
    Birthday: "01/01/1990",
  },
  {
    Gender: "Male",
  },
  {
    Email: "http://www.github.com/loremipsum",
  },
  {
    Phone: "123456789",
  },
  {
    Linkedin: "https://www.linkedin.com/in/loremipsum/",
  },
  {
    Github: "http://www.github.com/loremipsum",
  },
  {
    Address: "Lorem Ipsum",
  },
  {
    City: "Lorem Ipsum",
  },
  {
    State: "Lorem Ipsum",
  },
  {
    Zip: "Lorem Ipsum",
  },
  {
    Country: "Lorem Ipsum",
  },
];

const EditInfo = () => {
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        xs={12}
        sx={{ background: "#d3d3d3" }}
      >
        <Grid item xs={3} md={3} lg={3} sx={Item} textAlign="center">
          <Card sx={{ maxWidth: 500, width: "auto", boxShadow: "0" }}>
            <CardMedia component="img" height="500" image={pic} />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Lorem Ipsum
              </Typography>
              <Typography
                gutterBottom
                component="div"
                color="text.secondary"
                sx={{
                  fontSize: "20px",
                }}
              >
                Backend Developer
              </Typography>
            </CardContent>
            <Divider />
            <CardActions>
              <Grid container justifyContent="center">
                <Button size="large">
                  <LinkedInIcon sx={{ fontSize: "70px" }} />
                </Button>
                <Button size="Large">
                  <GitHubIcon sx={{ color: "black", fontSize: "60px" }} />
                </Button>
              </Grid>
            </CardActions>

            <Divider />
            <Grid item justifyContent="center">
              <Link to="/editprofile" style={{ textDecoration: "none" }}>
                <Button
                  sx={{
                    fontSize: "20px",
                    my: 3,
                    width: "200px",
                    height: "50px",
                    borderRadius: "10px",
                    background: "#d3d3d3",
                    color: "black",
                    boxShadow: "0",
                    position: "relative",

                    "&:hover": {
                      background: "#d3d3d3",
                      color: "black",
                    },
                  }}
                  variant="contained"
                >
                  Edit Info
                </Button>
              </Link>
            </Grid>
          </Card>
        </Grid>

        <Grid item xs={8} md={8} lg={8} sx={Item}>
          <Typography
            sx={{
              fontSize: "40px",
              m: 3,
            }}
          >
            Personal Information
          </Typography>
          <Divider />
          <Grid
            container
            justifyContent="center"
            sx={{
              my: 3,
              p: 3,
              borderRadius: "10px",
            }}
          >
            {info.map((data) => {
              return (
                <Grid container spacing={2}>
                  <Grid item xs={3} sx={{ ml: 3, my: 1 }}>
                    <Typography
                      sx={{
                        fontSize: "25px",
                        ml: 6,
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {Object.keys(data)} :
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      sx={{
                        fontSize: "25px",

                        color: "black",
                      }}
                    >
                      {Object.values(data)}
                    </Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>

        {/* Right Bar */}
      </Grid>
    </div>
  );
};

export default EditInfo;

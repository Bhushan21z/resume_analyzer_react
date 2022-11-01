import * as React from "react";
import { Grid, Button, TextField, Divider } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import pic from "../../Assets/mike.jpg";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
const Item = {
  backgroundColor: "white",
  color: "black",
  minHeight: "600px",
  height: "auto",
  borderRadius: "10px",
  my: 3,
  mx: 1,
  padding: 2,
};

const EditInfo = () => {
  const [gender, setGender] = React.useState("");

  const handleChange = (event) => {
    setGender(event.target.value);
  };

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
            <CardMedia component="img" height="300" image={pic} />
            <CardContent>
              <Typography gutterBottom variant="h4" component="div">
                Mike
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
          </Card>
        </Grid>
        <Grid item xs={8} md={8} lg={8} sx={Item}>
          <Typography
            sx={{
              fontSize: "40px",
              m: 3,
            }}
          >
            Edit Information
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={10} sm={5}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={10} sm={5}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={10} sm={5}>
              <InputLabel id="birthday">Birthday</InputLabel>
              <TextField
                name="birthday"
                type="date"
                required
                fullWidth
                labelId="birthday"
                autoFocus
              />
            </Grid>
            <Grid item xs={10} sm={5}>
              <InputLabel id="demo-simple-select-label">Gender</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                required
                fullWidth
                value={gender}
                label="Gender"
                onChange={handleChange}
              >
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>others</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={10} sm={5}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={10} sm={5}>
              <TextField
                type="tel"
                required
                fullWidth
                id="phone"
                label="Phone Number"
                name="phone"
              />
            </Grid>

            <Grid item xs={12}>
              <Button variant="contained">Save</Button>
            </Grid>
          </Grid>
        </Grid>

        {/* Right Bar */}
      </Grid>
    </div>
  );
};

export default EditInfo;

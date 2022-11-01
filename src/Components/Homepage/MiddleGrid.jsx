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
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import { useNavigate } from "react-router";

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
  // backgroundImage:
  //   "radial-gradient( circle 484px at 49.4% 19%,  rgba(23,156,214,1) 0%, rgba(52,48,111,1) 100.2% )",
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

const btn = {
  width: "190px",
  height: "60px",
  backgroundColor: "#EE6C4D",
  borderRadius: "5px",
  padding: "10px",
  m: 1,
  color: "white",
};

export default function MiddleGrid(props) {
  const hiddenFileInput = React.useRef(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    console.log("Triggered");
    const fileUploaded = event.target.files[0];
    //props.handleFile(fileUploaded);
    console.log(fileUploaded);
    navigate("/report");
  };

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
              <Button onClick={handleClick} sx={btn}>
                <Typography sx={{ fontSize: "20px", color: "white" }}>
                  <DriveFolderUploadIcon
                    sx={{
                      fontSize: "30px",
                      mr: "10px",
                      position: "relative",
                      top: "5px",
                    }}
                  />
                  Upload
                </Typography>
              </Button>
              {/* </Link> */}

              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
                style={{ display: "none" }}
              />

              <Link
                to="/makenew"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button sx={btn}>
                  <Typography sx={{ fontSize: "20px", color: "white" }}>
                    <CreateNewFolderIcon
                      sx={{
                        fontSize: "30px",
                        mr: "10px",
                        position: "relative",
                        top: "5px",
                      }}
                    />
                    Make New
                  </Typography>
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
    </div>
  );
}

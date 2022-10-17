import "../index.css";

import Footer from "../Components/Footer";
import Boxes from "../Components/Homepage/HeroSec.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Counter from "../Components/Homepage/counter";
import MiddleGrid from "../Components/Homepage/MiddleGrid";
import Appbar from "../Components/Appbar";

function Home() {
  return (
    <div className="Home">
      <Appbar />
      {/* <Boxes /> */}
      <MiddleGrid />
      <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid>
      {/* <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid>
      <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid> */}
      <Counter />
      <Grid container justifyContent="center">
        <Divider light width="90%" />
      </Grid>

      <Footer />
    </div>
  );
}
export default Home;

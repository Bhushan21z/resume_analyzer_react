import "../index.css";

import Footer from "../Components/Footer";
import { Divider } from "@mui/material";
import Grid from "@mui/material/Grid";
import Counter from "../Components/Homepage/counter";
import MiddleGrid from "../Components/Homepage/MiddleGrid";
import Appbar from "../Components/Appbar";

function Home() {
  return (
    <div>
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

import "../../index.css";

import Footer from '../Footer'
import Boxes from './HeroSec.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import { Divider } from "@mui/material";
import Grid from '@mui/material/Grid';
import Counter from './counter'
import MiddleGrid from "./MiddleGrid";




function Home() {
  return (
    <div className="Home">
      <Boxes />

      <MiddleGrid />
      <Grid container justifyContent="center">
        <Divider light width='90%' />
      </Grid>
      <Grid container justifyContent="center">
        <Divider light width='90%' />
      </Grid>
      <Grid container justifyContent="center">
        <Divider light width='90%' />
      </Grid>
      <Counter />
      <Grid container justifyContent="center">
        <Divider light width='90%' />
      </Grid>
      
      <Footer />
    </div>

  );
}
export default Home;
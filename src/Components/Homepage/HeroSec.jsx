import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExploreIcon from '@mui/icons-material/Explore';
import "../../index.css";
import * as animationData from '../../Assets/searchLottie.json'
import Lottie from 'react-lottie';
import Container from '@mui/material/Container'
import { Link } from 'react-router-dom';
import MiddleGrid from './MiddleGrid';



export default function Boxes() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    
    return (
    
            <Container maxWidth="xl"
              sx={{
                height: '10vh',
                width: '100vw',
                backgroundColor: '#00ABF3',
              }}>

              {/* Login Signup Grid */}
                <Grid
                sx={{
                  display: 'grid',
                  gridGap: '5px',
                  gridAutoFlow: 'column',
                  width: '100%',
                  gridTemplateColumns: '100px 100px',
                  justifyContent: 'end',
                  paddingTop : '20px'
                   }}>

                   <Button variant="contained" sx={{marginRight:'20px', backgroundColor:"#D9D9D9", color:'black'}}>
                   <Link to={`/signup`}>
                    Register
                   </Link>
                   </Button>
                   <Button variant="outlined" sx={{backgroundColor:"#D9D9D9", color:'black'}}>
                   <Link to={`/login`}>
                    Login
                   </Link>
                   </Button>
                </Grid>

                {/* Middle Grid */}
              {/* <MiddleGrid /> */}

              </Container>

    );
}
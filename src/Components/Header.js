import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';
import img from './../Media/images/family.png'


function Header(props) {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', backgroundColor:'#000', height:100, width:'100%', pt:1}}>
      <Grid container alignItems='center' justifyContent='center'>
        <Grid item display={{xs:'none', md:'flex'}}>
          <img src={img} height='85'/>
        </Grid>
        <Grid item alignItems='center'>
          <Grid item>
            <Typography variant='h3' color='silver' fontSize={{xs:20, md:50}}>
              ZOE INC. & ASSOCIATES
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5' color='#0066CC' fontWeight={600} fontSize={{xs:15, md:25}}>
              THE POWER OF LIFE...
            </Typography>
          </Grid>
        </Grid>
      </Grid>
        <ResponsiveAppBar appBarProps={props}/>
    </Box>
  );
}

export default Header;

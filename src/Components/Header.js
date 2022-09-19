import React from 'react';
import { Box, Paper } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';


function Header(props) {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', backgroundColor:'black', height:100, width:'100%'}}>
        <Paper sx={{display:'flex', alignItems:'center', alignContent:'center', backgroundColor:'black'}}>
            <div style={{color:'white', fontSize:30, paddingTop:20}}>
                ZOE INC. & ASSOCIATES
            </div>
        </Paper>
        <ResponsiveAppBar appBarProps={props}/>
    </Box>
  );
}

export default Header;

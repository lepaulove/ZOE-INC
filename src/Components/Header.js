import React from 'react';
import { Box, Paper } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';


function Header(props) {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', backgroundColor:'#070238', height:100, width:'100%'}}>
        <Paper sx={{display:'flex', alignItems:'center', alignContent:'center', backgroundColor:'#070238'}}>
            <div style={{color:'#CC0099', fontSize:30, paddingTop:20}}>
                ZOE INC. & ASSOCIATES
            </div>
        </Paper>
        <ResponsiveAppBar appBarProps={props}/>
    </Box>
  );
}

export default Header;

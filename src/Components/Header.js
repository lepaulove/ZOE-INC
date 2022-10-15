import React from 'react';
import { Box, Paper } from '@mui/material';
import ResponsiveAppBar from './ResponsiveAppBar';


function Header(props) {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'space-between', backgroundColor:'#000', height:100, width:'100%'}}>
        <Paper sx={{display:'flex', alignItems:'center', alignContent:'center', backgroundColor:'#000'}}>
            <div style={{color:'white', fontSize:30, paddingTop:20}}>
                ZOE INC. & ASSOCIATE
            </div>
        </Paper>
        <ResponsiveAppBar appBarProps={props}/>
    </Box>
  );
}

export default Header;

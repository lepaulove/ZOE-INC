import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider, Typography } from '@mui/material';
import FullAppBar from './FullAppBar'
import MobileAppBar from './MobileAppBar'
import img from './../Media/images/family.png'


const ResponsiveAppBar = ( props ) => {
    
  const theme = createTheme({
      palette:{
          primary:{
              main:'#181824'
          }
      }
  })

  return (
    <ThemeProvider theme={theme}>
        <AppBar position="static" color='primary'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <FullAppBar props={props}/>
                    <MobileAppBar props={props}/>
                </Toolbar>
                {/* <Toolbar>
                    <FullAppBar props={props}/>
                </Toolbar> */}
            </Container>
        </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;

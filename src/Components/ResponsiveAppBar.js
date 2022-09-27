import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material';
import NavButton from './NavButtons';
import { useSelector } from 'react-redux';
import { auth } from '../Firebase/utils';
import { useNavigate } from 'react-router-dom';
import FullAppBar from './FullAppBar'
import MobileAppBar from './MobileAppBar'


const pages = ['Who are we', 'Purpose', 'About', 'Contact', 'Get Involved'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const ResponsiveAppBar = ( props ) => {
    
  const theme = createTheme({
      palette:{
          primary:{
              main:'#000'
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

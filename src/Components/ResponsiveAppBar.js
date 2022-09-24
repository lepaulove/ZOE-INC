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
import { selectUser } from '../State/UserSlice';
import { auth } from '../Firebase/utils';

const pages = ['Who are we', 'Purpose', 'About', 'Contact', 'Get Involved'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = ( props ) => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const currentUser = useSelector(selectUser)
  const [loginText, setLoginText] = useState('Login')

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  useEffect(() => {
    setLoginText(currentUser ? 'Logout' : 'Login')
  }, [currentUser])

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
                <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                        <MenuItem component='a' href='/' onClick={() => { props.appBarProps.scrollController(props.appBarProps.historyRef); handleCloseNavMenu()}}>
                            <Typography textAlign="center">History</Typography>
                        </MenuItem>
                        <MenuItem  onClick={() => { props.appBarProps.scrollController(props.appBarProps.purposeRef); handleCloseNavMenu()}}>
                            <Typography textAlign="center">Purpose</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => { props.appBarProps.scrollController(props.appBarProps.aboutRef); handleCloseNavMenu()}}>
                            <Typography textAlign="center">About</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => { props.appBarProps.scrollController(props.appBarProps.contactRef); handleCloseNavMenu()}}>
                            <Typography textAlign="center">Contact</Typography>
                        </MenuItem>
                        <MenuItem onClick={() => { props.appBarProps.scrollController(props.appBarProps.getInvolvedRef); handleCloseNavMenu()}}>
                            <Typography textAlign="center">Get Involved</Typography>
                        </MenuItem>
                        <MenuItem component='a' href='/login' onClick={() => { auth.signOut(); handleCloseNavMenu() }}>
                            <Typography textAlign="center">{loginText}</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                <Typography
                    variant="h5"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    }}
                >
                    LOGO
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <NavButton page={'Who Are We'} clickHandler={props.appBarProps.scrollController} reference={props.appBarProps.historyRef}/>
                    <NavButton page={'Purpose'} clickHandler={props.appBarProps.scrollController} reference={props.appBarProps.purposeRef}/>
                    <NavButton page={'About'} clickHandler={props.appBarProps.scrollController} reference={props.appBarProps.aboutRef}/>
                    <NavButton page={'Contact'} clickHandler={props.appBarProps.scrollController} reference={props.appBarProps.contactRef}/>
                    <NavButton page={'Get Involved'} clickHandler={props.appBarProps.scrollController} reference={props.appBarProps.getInvolvedRef}/>
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <MenuItem>
                        <Typography onClick={() => auth.signOut()} component='a' href='/login' textAlign="center" sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    border:'3px solid white',
                    px:1,
                    py:0.5}}>{loginText.toUpperCase() + ' s'}</Typography>
                    </MenuItem>
                    {/* <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                    </IconButton>
                    </Tooltip> */}
                    <Menu
                    sx={{ mt: '45px' }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                    >
                    {settings.map((setting) => (
                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                </Toolbar>
            </Container>
        </AppBar>
    </ThemeProvider>
  );
};
export default ResponsiveAppBar;

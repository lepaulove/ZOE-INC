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
import { Link, useNavigate } from 'react-router-dom';
import FullAppBar from './FullAppBar'

const mapUserState = ({ user }) => ({
    currentUser: user.currentUser
})

const mapUserDataState = ({user}) => ({
    userProfileData: user.userProfileData
})

export default function MobileAppBar(props) {


    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [loginText, setLoginText] = useState('Login')
    const { currentUser } = useSelector(mapUserState)
    const { userProfileData } = useSelector(mapUserDataState)
    const navigate = useNavigate()
  
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
      setLoginText(currentUser ? 'My Account' : 'Login')
    }, [currentUser])

  return (
    <>
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
                        <Link to='ZOE-INC'><MenuItem /*component='a' href='/'*/ onClick={() => { props.props.appBarProps.scrollController(props.props.appBarProps.historyRef); handleCloseNavMenu(); navigate('/')}}>
                            <Typography textAlign="center">History</Typography>
                        </MenuItem></Link>
                        <Link to='ZOE-INC'><MenuItem  onClick={() => { props.props.appBarProps.scrollController(props.props.appBarProps.purposeRef); handleCloseNavMenu()}}>
                            <Typography textAlign="center">Purpose</Typography>
                        </MenuItem></Link>
                        <Link to='ZOE-INC'><MenuItem onClick={() => { props.props.appBarProps.scrollController(props.props.appBarProps.aboutRef); handleCloseNavMenu()}}>
                            <Typography textAlign="center">About</Typography>
                        </MenuItem></Link>
                        <Link to='ZOE-INC'><MenuItem onClick={() => { props.props.appBarProps.scrollController(props.props.appBarProps.contactRef); handleCloseNavMenu()}}>
                            <Typography textAlign="center">Contact</Typography>
                        </MenuItem></Link>
                        <Link to='ZOE-INC'><MenuItem onClick={() => { props.props.appBarProps.scrollController(props.props.appBarProps.getInvolvedRef); handleCloseNavMenu()}}>
                            <Typography textAlign="center">Get Involved</Typography>
                        </MenuItem></Link>
                        {currentUser && 
                            <Link to='/superchat'><MenuItem onClick={() => {  handleCloseNavMenu() }}>
                                <Typography textAlign="center">Community Square</Typography>
                            </MenuItem></Link>
                        }
                        {userProfileData && userProfileData.userRoles[0] === 'admin' && 
                            <Link to='/admin'><MenuItem onClick={() => { handleCloseNavMenu() }}>
                                <Typography textAlign="center">Admin</Typography>
                            </MenuItem></Link>
                        }
                        {!currentUser ? 
                            <Link to='/login'>
                                <MenuItem /*component='a' href='/login'*/ onClick={() => { /*auth.signOut();*/ handleCloseNavMenu() }}>
                                    <Typography textAlign="center">{loginText}</Typography>
                                </MenuItem>
                            </Link> 
                            : 
                            <Link to='/my-account'>
                                <MenuItem /*component='a' href='/login'*/ onClick={() => { /*auth.signOut();*/ handleCloseNavMenu() }}>
                                    <Typography textAlign="center">{loginText}</Typography>
                                </MenuItem>
                            </Link>
                        }
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
    </>
  )
}

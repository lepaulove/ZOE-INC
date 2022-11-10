import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { createTheme, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import FullAppBar from './FullAppBar'
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Toolbar from '@mui/material/Toolbar';

const mapUserState = ({ user }) => ({
    currentUser: user.currentUser
})

const mapUserDataState = ({user}) => ({
    userProfileData: user.userProfileData
})

export default function MobileAppBar(props) {


    const [drawerState, setDrawerState] = useState(false)
    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [loginText, setLoginText] = useState('Login')
    const { currentUser } = useSelector(mapUserState)
    const { userProfileData } = useSelector(mapUserDataState)
    const navigate = useNavigate()

    const toggleDrawer = () => {
        setDrawerState(!drawerState)
    }
  
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
                    onClick={toggleDrawer}
                    color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <SwipeableDrawer
                        // variant="permanent"
                        open={drawerState}
                        onOpen={toggleDrawer}
                        onClose={toggleDrawer}
                        sx={{                            
                            width: 245,
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor:'black', color:'white' },
                        }}
                    >
                        <Box sx={{display:'flex', alignItems:'center', justifyContent:'center', pt:4}}>
                            
                            <Typography variant='h3' color='dodgerblue' fontWeight='bold'>MENU</Typography>
                        </Box>
                        <Divider sx={{backgroundColor:'dodgerblue'}} variant='middle'/>
                        <List>
                            <Link to='/ZOE-INC' style={{textDecoration: 'none'}}>
                                <ListItem>
                                    <ListItemButton onClick={toggleDrawer}>
                                        <Typography sx={{color:'white'}}>HOME</Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/resources'style={{textDecoration: 'none'}}>
                                <ListItem>
                                    <ListItemButton onClick={toggleDrawer}>
                                        <Typography sx={{color:'white'}}>RESOURCES</Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link to='/partnerships'style={{textDecoration: 'none'}}>
                                <ListItem>
                                    <ListItemButton onClick={toggleDrawer}>
                                        <Typography sx={{color:'white'}}>PARTNERSHIPS</Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            {currentUser && 
                            <Link to='/superchat'style={{textDecoration: 'none'}}>
                                <ListItem>
                                    <ListItemButton onClick={toggleDrawer}>
                                        <Typography sx={{color:'white'}}>COMMUNITY SQUARE</Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            }
                            {currentUser && 
                            <Link to='/private-chat'style={{textDecoration: 'none'}}>
                                <ListItem>
                                    <ListItemButton onClick={toggleDrawer}>
                                        <Typography sx={{color:'white'}}>PRIVATE CHAT</Typography>
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            }
                            {userProfileData && userProfileData.userRoles[0] === 'stakeHolder' && 
                                <Link to='/stakeholder'style={{textDecoration: 'none'}}>
                                    <ListItem>
                                        <ListItemButton onClick={toggleDrawer}>
                                            <Typography sx={{color:'white'}}>STAKEHOLDER</Typography>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            }
                            {userProfileData && userProfileData.userRoles[0] === 'admin' && 
                                <Link to='/admin'style={{textDecoration: 'none'}}>
                                    <ListItem>
                                        <ListItemButton onClick={toggleDrawer}>
                                            <Typography sx={{color:'white'}}>ADMIN</Typography>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            }
                            {!currentUser ? 
                                <Link to='/login' style={{textDecoration: 'none'}}>
                                    <ListItem>
                                        <ListItemButton onClick={toggleDrawer}>
                                            <Typography sx={{color:'white'}}>{loginText.toLocaleUpperCase()}</Typography>
                                        </ListItemButton>
                                    </ListItem>
                                </Link> 
                                : 
                                <Link to='/my-account' style={{textDecoration: 'none'}}>
                                    <ListItem>
                                        <ListItemButton onClick={toggleDrawer}>
                                            <Typography sx={{color:'white'}}>{loginText.toLocaleUpperCase()}</Typography>
                                        </ListItemButton>
                                    </ListItem>
                                </Link>
                            }
                        </List>
                       <Toolbar />
                    </SwipeableDrawer>
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

{/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                        <Link to='ZOE-INC'><MenuItem  onClick={() => { props.props.appBarProps.scrollController(props.props.appBarProps.historyRef); handleCloseNavMenu(); navigate('/')}}>
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
                                <MenuItem  onClick={() => {  handleCloseNavMenu() }}>
                                    <Typography textAlign="center">{loginText}</Typography>
                                </MenuItem>
                            </Link> 
                            : 
                            <Link to='/my-account'>
                                <MenuItem  onClick={() => {  handleCloseNavMenu() }}>
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
                </Typography> */}

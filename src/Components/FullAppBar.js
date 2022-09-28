import React, { useState, useEffect } from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import { Typography, Box, MenuItem, Menu } from '@mui/material'
import NavButton from './NavButtons'
import { auth } from '../Firebase/utils';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

export default function FullAppBar( props ) {

    const [anchorElUser, setAnchorElUser] = useState(null);
    const [loginText, setLoginText] = useState('')
    const [path, setPath] = useState('login')
    const { currentUser } = useSelector(mapState)
    const navigate = useNavigate()
    
      const handleCloseUserMenu = () => {
        setAnchorElUser(null);
      };
    
      useEffect(() => {
        setLoginText(currentUser ? 'My Account' : 'Login')
        setPath(currentUser ? 'my-account' : 'login')
      }, [currentUser])

  return (
    <>
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
                }}>
                LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <NavButton page={'Who Are We'} clickHandler={props.props.appBarProps.scrollController} reference={props.props.appBarProps.historyRef}/>
                <NavButton page={'Purpose'} clickHandler={props.props.appBarProps.scrollController} reference={props.props.appBarProps.purposeRef}/>
                <NavButton page={'About'} clickHandler={props.props.appBarProps.scrollController} reference={props.props.appBarProps.aboutRef}/>
                <NavButton page={'Contact'} clickHandler={props.props.appBarProps.scrollController} reference={props.props.appBarProps.contactRef}/>
                <NavButton page={'Get Involved'} clickHandler={props.props.appBarProps.scrollController} reference={props.props.appBarProps.getInvolvedRef}/>
                {currentUser && <NavButton page={'Community Square'} clickHandler={(() => navigate('/superchat'))} />}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                    <MenuItem>
                        <Typography /*onClick={() => auth.signOut()}*/ component='a' href={path} textAlign="center" sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    border:'3px solid white',
                    px:1,
                    py:0.5}}>{loginText.toUpperCase()}</Typography>
                    </MenuItem>
                    {/* <MenuItem>
                        <Typography onClick={() => auth.signOut()} component='a' href='/' textAlign="center" sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    border:'3px solid white',
                    px:1,
                    py:0.5}}>LOGOUT</Typography> 
                    </MenuItem> */}
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
                    </Menu>
                </Box>
    </>
  )
}

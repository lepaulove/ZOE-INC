import React, { useState, useEffect } from 'react'
import AdbIcon from '@mui/icons-material/Adb';
import { Typography, Box, MenuItem, Menu } from '@mui/material'
import NavButton from './NavButtons'
import { auth } from '../Firebase/utils';
import { useSelector } from 'react-redux';
import { current } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const mapUserState = ({ user }) => ({
    currentUser: user.currentUser
})

const mapUserDataState = ({user}) => ({
    userProfileData: user.userProfileData
})

export default function FullAppBar( props ) {

    const [anchorElUser, setAnchorElUser] = useState(null);
    const [loginText, setLoginText] = useState('')
    const [path, setPath] = useState('login')
    const { currentUser } = useSelector(mapUserState)
    const { userProfileData } = useSelector(mapUserDataState)
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
                href="/ZOE-INC"
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
                {/* <NavButton page={'Who Are We'} clickHandler={() => navigate('/ZOE-INC')} reference={props.props.appBarProps.historyRef}/>
                <NavButton page={'Purpose'} clickHandler={() => navigate('/ZOE-INC')} reference={props.props.appBarProps.purposeRef}/>
                <NavButton page={'About'} clickHandler={() => navigate('/ZOE-INC')} reference={props.props.appBarProps.aboutRef}/>
                <NavButton page={'Contact'} clickHandler={() => navigate('/ZOE-INC')} reference={props.props.appBarProps.contactRef}/>
                <NavButton page={'Get Involved'} clickHandler={() => navigate('/ZOE-INC')} reference={props.props.appBarProps.getInvolvedRef}/>*/}
                <NavButton page={'Home'} clickHandler={() => navigate('/ZOE-INC')} reference={props.props.appBarProps.getInvolvedRef}/>
                <NavButton page={'Rources'} clickHandler={() => navigate('/resources')} reference={props.props.appBarProps.getInvolvedRef}/> 
                {currentUser && <NavButton componentType={'a'} redirect={'/superchat'} page={'Community Square'} /*clickHandler={(() => navigate('/superchat'))}*/ />}
                {userProfileData && userProfileData.userRoles[0] === 'admin' && <NavButton page={'Admin'} clickHandler={(() => navigate('/admin'))} />}
            </Box>
            <Box sx={{ flexGrow: 0 }}>
                    <Link style={{textDecoration:'none', color:'white'}} to={`/${path}`}><MenuItem>
                        <Typography /*onClick={() => auth.signOut()}*/  textAlign="center" sx={{
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
                    </MenuItem></Link>
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

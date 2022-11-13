import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, ThemeProvider, createTheme, Button } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../Firebase/utils'
import { useNavigate } from 'react-router-dom'
import { emailSignIn, setUserProfileData } from '../Redux/User/user.actions'


const mapUserState = ({ user }) => ({
    currentUser: user.currentUser
})

const mapUserDataState = ({ user }) => ({
    userProfileData: user.userProfileData
})

const UserAccount = () => {

    const { userProfileData } = useSelector(mapUserDataState)
    const [displayName, setDisplayName] = useState('My Account')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    // setDisplayName( () => {userProfileInfo.data().displayName ? setDisplayName(userProfileInfo.data().displayName) : currentUser.displayName})   

    useEffect(() => {   
         
            // const userData = async () => { const data = await getSnapshotFromUserAuth(currentUser); dispatch(setUserProfileData(data)) }
            // userData()
            // setDisplayName( () => userProfileInfo ? setDisplayName(userProfileInfo.data().displayName) : currentUser.displayName )
            setDisplayName(userProfileData.displayName)  
    }, [])

    const theme = createTheme({
        palette:{
            primary:{
                main:'#000'
            }
        }
    })

    const handleUserSignout = () => {
        auth.signOut()
        dispatch(setUserProfileData(null))
        dispatch(emailSignIn(null))
    }

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{background:'linear-gradient(to left bottom, #004FFF, #005 120%)'}}>
            < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', pt: 4, backgroundColor:'transparent'}}>
                <Grid item>
                    <Typography variant='h3' fontWeight='bold' color='silver'>{displayName}</Typography>
                </Grid>
                <Grid>
                    <Button  onClick={() => {handleUserSignout(); navigate('/login')}} variant='contained' color='primary' size='large'>
                        <Typography >
                            LOGOUT
                        </Typography>
                    </Button>
                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
  )
}

export default UserAccount

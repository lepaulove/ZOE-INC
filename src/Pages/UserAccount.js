import React, { useState, useEffect } from 'react'
import { Container, Box, Grid, Typography, ThemeProvider, createTheme } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { getSnapshotFromUserAuth } from '../Firebase/utils'
import { setUserProfileData } from '../Redux/User/user.actions'


const mapUserState = ({ user }) => ({
    currentUser: user.currentUser
})

const mapUserDataState = ({ user }) => ({
    userProfileData: user.userProfileData
})

const UserAccount = () => {

    const { currentUser } = useSelector(mapUserState)
    const { userProfileData } = useSelector(mapUserDataState)
    const [userProfileInfo, setUserProfileInfo] = useState(null)
    const [displayName, setDisplayName] = useState('My Account')
    const dispatch = useDispatch()   

    // setDisplayName( () => {userProfileInfo.data().displayName ? setDisplayName(userProfileInfo.data().displayName) : currentUser.displayName})   

    useEffect(() => {   
         
            // const userData = async () => { const data = await getSnapshotFromUserAuth(currentUser); dispatch(setUserProfileData(data)) }
            // userData()
            setUserProfileInfo(userProfileData)
            // setDisplayName( () => userProfileInfo ? setDisplayName(userProfileInfo.data().displayName) : currentUser.displayName ) 
            console.log(userProfileData)
            setDisplayName(userProfileData.displayName)  
    }, [])

    const theme = createTheme({  

    })

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{backgroundColor:'dodgerblue'}}>
            < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', pt: 4, backgroundColor:'transparent'}}>
                <Grid item>
                    <Typography variant='h3' fontWeight='bold'>{displayName}</Typography>
                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
  )
}

export default UserAccount

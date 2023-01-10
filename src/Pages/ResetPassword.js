import React, { useState } from 'react'
import { Box, Grid, TextField, Button, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material';
import { auth } from '../Firebase/utils';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {

    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(null)
    const navigate = useNavigate()

    const getEmail = (e) => {
        setEmailError(null)
        let val = e.target.value
        setEmail(val)
    }

    const textFieldStyle = {'& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#181824',
          
          color:'#FFF'
        },
        '&:hover fieldset': {
          borderColor: 'lightgray',
          color:'white'
        },
        '&.Mui-focused fieldset': {
          borderColor: 'white',
          color:'#FFF'
        },
        backgroundColor: '#262A34',
        color:'#FFF'
      }}

    const handlePasswordReset = async () => {
        const config = {
            url: 'http://192.168.0.11:3000/login'
          };
        try{
            await auth.sendPasswordResetEmail(email, config)
        }catch(err){
            console.log(err)
            switch(err.code){
                case 'auth/invalid-email':
                    setEmailError('Invalid Email Address')
                    break
                case 'auth/user-not-found':
                    setEmailError('No account found for this email address')
                    break
            }
            
        }
    }    

    const theme = createTheme({
        palette:{
            primary:{
                main:'#000'
            }
        }
    })

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor:'#181824'}}>
                < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', pt: 4, backgroundColor:'transparent'}}>
                    <Grid item>
                        <Typography variant='h4' fontWeight='bold' color='#FFF'>RESET PASSWORD</Typography>
                    </Grid>
                    <Grid item container direction='row' justifyContent='center' spacing={{xs:2}}>
                        <Grid item xs={11} md={6.01}>
                            <TextField InputLabelProps={{style : {color : 'silver'} }} sx={textFieldStyle} fullWidth type='email' helperText={emailError} error={emailError} label='EMAIL' value={email} onChange={getEmail} />
                        </Grid>
                        <Grid item xs={11} md={6.01}>
                            <Button fullWidth size='large' variant='contained' color='primary' sx={{backgroundColor:'#36BAFE'}} onClick={handlePasswordReset}>
                                <Typography color='#FFF' fontSize={25} fontWeight={700}>
                                    RESET PASSWORD
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )

}

export default ResetPassword
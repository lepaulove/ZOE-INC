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
            <Box sx={{background:'linear-gradient(to left bottom, #004FFF, #005 120%)'}}>
                < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', pt: 4, backgroundColor:'transparent'}}>
                    <Grid item>
                        <Typography variant='h4' fontWeight='bold' color='silver'>RESET PASSWORD</Typography>
                    </Grid>
                    <Grid item container direction='row' justifyContent='center' spacing={{xs:2}}>
                        <Grid item xs={9} md={6.01}>
                            <TextField InputLabelProps={{style : {color : 'silver'} }} sx={{'& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'silver',
      },
      '&:hover fieldset': {
        borderColor: 'lightgray',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    }}} fullWidth type='email' helperText={emailError} error={emailError} label='EMAIL' value={email} onChange={getEmail} />
                        </Grid>
                        <Grid item xs={8.4} md={6.01}>
                            <Button fullWidth size='large' variant='contained' color='primary' sx={{border:'2px solid silver'}} onClick={handlePasswordReset}>
                                <Typography color='silver'>
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
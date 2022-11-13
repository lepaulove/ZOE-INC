import React, { useState, useEffect } from 'react'
import { Box, Grid, TextField, Button, Typography } from '@mui/material'
import { handleSignUp } from '../Firebase/utils'
import { createTheme, ThemeProvider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { emailSignIn } from '../Redux/User/user.actions';
import { useNavigate } from 'react-router-dom';


const CreateAccount = () => {

    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [userAuthenticated, setUserAuthenticated] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        userAuthenticated ? navigate('/ZOE-INC') : console.log('User Not Found')
    }, [userAuthenticated])

    const getName = event =>{
        let val = event.target.value
        setName(val)
        setNameError('')
    }

    const getEmail = event =>{
        let val = event.target.value
        setEmail(val)
        setEmailError('')
    }

    const getPassword = event =>{
        let val = event.target.value
        setPassword(val)
        setPasswordError('')
    }

    const getConfirmPassword = event =>{
        let val = event.target.value
        setConfirmPassword(val)
        setConfirmPasswordError('')
    } 
    
    const submitForm = async () => {

        if(!name | !email | !password | !confirmPassword){
            setNameError(name ? '' : 'Name Field is Required...')
            setEmailError(email ? '' : 'Email Field is Required...')
            setPasswordError(password ? '' : 'Password Field is Required...')
            setConfirmPasswordError(confirmPassword ? '' : 'Confirm Password Field is Required...')
            return
        } 

        let user
        try {
            user = await handleSignUp(name, email, password, confirmPassword)
        }catch(err){
            switch(err.code){
                case 'auth/email-already-in-use':
                  setEmailError('Email already in use by another account')
                  break
                case 'auth/invalid-email':
                  setEmailError('Invlaid Email')
                  break
                case 'auth/weak-password':
                  setPasswordError('Password must contain at least 6 charaters')
                    break
                default:
                    switch(err){
                        case 'Passwords Do Not Match.':
                            setPasswordError('Passwords Do Not Match.')
                            setConfirmPasswordError('Passwords Do Not Match.')
                    }
                        
                }
            return
        }
        dispatch(emailSignIn(user))
        setUserAuthenticated(true)
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
        <Box sx={{background:'linear-gradient(to left bottom, #004FFF, #005 120%)', pt:3}}>
            < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', backgroundColor:'transparent'}}>
                <Grid item>
                   <Typography variant='h4' fontWeight='bold' color='silver'>CREATE ACCOUNT</Typography>
                </Grid>
                <Grid item container justifyContent='center' spacing={{xs:2}}>
                    <Grid item xs={9}>
                        <TextField fullWidth error={nameError} helperText={nameError} label='NAME' value={name} onChange={getName}/>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField fullWidth error={emailError} helperText={emailError} label='EMAIL' value={email} onChange={getEmail}/>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField fullWidth error={passwordError} helperText={passwordError} type='password' label='PASSWORD' value={password} onChange={getPassword}/>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField fullWidth error={confirmPasswordError} helperText={confirmPasswordError} type='password' label='CONFIRM PASSWORD' value={confirmPassword} onChange={getConfirmPassword}/>
                    </Grid>
                    <Grid item xs={8.4}>
                        <Button onClick={() => submitForm()} fullWidth size='large' variant='contained' color='primary' sx={{border:'2px solid silver'}}>
                            <Typography color='silver'>
                                Register
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
    )
}

export default CreateAccount
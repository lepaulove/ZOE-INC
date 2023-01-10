import React, { useState, useEffect } from 'react'
import { Box, Grid, TextField, Button, Typography } from '@mui/material'
import { handleSignUp } from '../Firebase/utils'
import { createTheme, ThemeProvider } from '@mui/material';
import { useDispatch } from 'react-redux';
import { emailSignIn } from '../Redux/User/user.actions';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';


const CreateAccount = () => {

    
    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [confirmPasswordError, setConfirmPasswordError] = useState('')
    const [dobError, setDobError] = useState('')
    const [userAuthenticated, setUserAuthenticated] = useState(false)
    const [dateValue, setDateValue] = React.useState(dayjs(null));
    const [formData, setFormData] = useState({
      'firstName': '',
      'lastName': '',
      'dob': {
        'month': '',
        'day': '',
        'year': ''
      },
      'email': '',
      'password': '',
      'confirmPassword': ''

    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(userAuthenticated)
          navigate('/')
        else 
          console.log('User Not Found')
    }, [userAuthenticated])

    const resetErrors = () => {
      setNameError('')
      setEmailError('')
      setPasswordError('')
      setConfirmPasswordError('')
    }

    const handleChange = (newDateValue) => {
      setFormData({...formData, dob:{day: newDateValue?.date(), month: newDateValue?.month() + 1, year: newDateValue?.year() }})
      setDateValue(newDateValue);
      setDobError('')
    };

    console.log(formData)
    
    const submitForm = async () => {
      console.log('SUBMIT')

        if(!formData.firstName | !formData.email | !formData.password | !formData.confirmPassword | !(formData.dob.month && formData.dob.day && formData.dob.year)){
            setNameError(formData.firstName && formData.lastName ? '' : 'Name Fields are Required...')
            setEmailError(formData.email ? '' : 'Email Field is Required...')
            setPasswordError(formData.password ? '' : 'Password Field is Required...')
            setConfirmPasswordError(formData.confirmPassword ? '' : 'Confirm Password Field is Required...')
            setDobError(formData.dob.month && formData.dob.day && formData.dob.year ? '' : 'Date of Birth is Required...')
            return
        } 

        let user
        try {
            user = await handleSignUp({ formData })
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

    return(
        
        <ThemeProvider theme={theme}>
        <Box sx={{backgroundColor:'#181824', pt:6}}>
            < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{minHeight:'100vh', backgroundColor:'transparent'}}>
                <Grid item>
                   <Typography variant='h4' fontWeight='bold' color='#FFF'>CREATE ACCOUNT</Typography>
                </Grid>
                <Grid item container justifyContent='center' rowSpacing={{xs:2, md:4}} >
                    <Grid item container xs={11} md={9} columnSpacing={2}>
                        <Grid item xs={6}><TextField InputLabelProps={{style : {color : '#FFF'} }} sx={textFieldStyle} fullWidth error={nameError} helperText={nameError} label='FIRST NAME' value={formData.firstName} onChange={(e) => {setFormData({...formData, firstName: e.target.value}); resetErrors()}}/></Grid>
                        <Grid item xs={6}><TextField InputLabelProps={{style : {color : '#FFF'} }} sx={textFieldStyle} fullWidth error={nameError} helperText={nameError} label='LAST NAME' value={formData.lastName} onChange={(e) => {setFormData({...formData, lastName: e.target.value}); resetErrors()}}/></Grid>
                    </Grid>
                    <Grid item container xs={11} md={9} columnSpacing={2}>
                        <Grid item xs={5} md={3}>
                          <LocalizationProvider dateAdapter={AdapterDayjs} >
                          <Box sx={{display:{xs:'none', md:'flex'}}}><DesktopDatePicker
                            label="DATE OF BIRTH"
                            inputFormat="MM/DD/YYYY"
                            value={dateValue}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} InputLabelProps={{style : {color : '#FFF'} }} error={dobError} helperText={dobError} sx={textFieldStyle}/>}
                            
                          /></Box>
                          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}><MobileDatePicker
                            label="DATE OF BIRTH"
                            inputFormat="MM/DD/YYYY"
                            value={dateValue}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} InputLabelProps={{style : {color : '#FFF'} }} error={dobError} helperText={dobError} sx={textFieldStyle}/>}
                            
                          /></Box>
                          </LocalizationProvider>
                          {/* <DOBSelect formData={formData} setFormData={setFormData} textFieldStyle={textFieldStyle}/> */}
                        </Grid>
                        <Grid item xs={7} md={9}><TextField InputLabelProps={{style : {color : '#FFF'} }} sx={textFieldStyle} fullWidth error={emailError} helperText={emailError} label='EMAIL' value={formData.email} onChange={(e) => {setFormData({...formData, email: e.target.value}); resetErrors()}}/></Grid>
                    </Grid>
                    <Grid item xs={11} md={9}>
                        <TextField InputLabelProps={{style : {color : '#FFF'} }} sx={textFieldStyle} fullWidth error={passwordError} helperText={passwordError} type='password' label='PASSWORD' value={formData.password} onChange={(e) => {setFormData({...formData, password: e.target.value}); resetErrors()}}/>
                    </Grid>
                    <Grid item xs={11} md={9}>
                        <TextField InputLabelProps={{style : {color : '#FFF'} }} sx={textFieldStyle} fullWidth error={confirmPasswordError} helperText={confirmPasswordError} type='password' label='CONFIRM PASSWORD' value={formData.confirmPassword} onChange={(e) => {setFormData({...formData, confirmPassword: e.target.value}); resetErrors()}}/>
                    </Grid>
                    <Grid item xs={11}>
                        <Button onClick={() => submitForm()} fullWidth size='large' variant='contained' color='primary' sx={{backgroundColor:'#36BAFE'}}>
                            <Typography color='#FFF' fontWeight={700} fontSize={25}>
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
import React, { useState, useEffect } from 'react'
import { Box, Grid, TextField, Button, Typography } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material';
import { auth, handleUserProfile } from '../Firebase/utils';
import { useSelector, useDispatch } from 'react-redux';
import { emailSignIn } from '../Redux/User/user.actions';
import { Link, useNavigate } from 'react-router-dom';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { currentUser } = useSelector(mapState)
    // const  currentUser  = useSelector(state => state.user)
    // let currentUser = useSelector(selectUser)
    // console.log(currentUser)
    // const auth = getAuth()

    // const CssTextField = makeStyles({
    //     root: {
            
    //     }
    // })

    useEffect(() => {
        currentUser ? navigate('/') : console.log('No User Found')
        return
    }, [currentUser])

    const getEmail = (e) => {
        setEmailError(null)
        let val = e.target.value
        setEmail(val)
    }

    const getPassword = (e) => {
        setPasswordError(null)
        let val = e.target.value
        setPassword(val)
    }

    // handleSignUp('test1@test.com', '1234567')
    const theme = createTheme({
        palette:{
            primary:{
                main:'#000'
            }
        }
    })

    const handleLogin = async () => {
        try {
            const user = await auth.signInWithEmailAndPassword(email, password)
            const user2 = await (await (await handleUserProfile(user.user)).get()).data()
            dispatch(emailSignIn(user2))
        }catch(err){
            console.log(err)
            switch(err.code){
                case 'auth/invalid-email':
                    setEmailError('Invalid Email Address')
                    break
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    setEmailError('Incorrect Email or Password')
                    setPasswordError('Incorrect Email or Password')
                    break
                case 'auth/email-already-in-use':
                    setEmailError('You already have an account')
                    break
                case 'auth/internal-error':
                default:
                    setEmailError('An Error Occured. Please try again')
            }       
        }
    }

    // console.log(currentUser.user.email)

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{background:'linear-gradient(to left bottom, #004FFF, #005 120%)'}}>
                < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', pt: 4, backgroundColor:'transparent'}}>
                    <Grid item>
                        <Typography variant='h3' fontWeight='bold' color='white'>LOGIN</Typography>
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
      '&.Mui-focused': {
        color: 'white',
      },
    }}} fullWidth type='email' helperText={passwordError ? '' : emailError} error={emailError ? true : false} label='EMAIL' value={email} onChange={getEmail} />
                        </Grid>
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
    }}} fullWidth type='password' helperText={passwordError} error={passwordError ? true : false} label='PASSWORD' value={password} onChange={getPassword}/>
                        </Grid>
                        <Grid item xs={8.4} md={6.01}>
                            <Button fullWidth size='large' variant='contained' color='primary' sx={{border:'2px solid silver'}} onClick={handleLogin}>
                                <Typography color='silver'>
                                    LOGIN
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={8.4} md={6.01}>
                            <Link to='/register'>
                                <Button fullWidth size='large' variant='contained' color='primary' sx={{border:'2px solid silver'}} /*</Grid>onClick={() => {navigate('/register')}}*/>
                                    <Typography sx={{textDecoration: 'none', color:'silver'}}>
                                        Register
                                    </Typography>
                                </Button>
                            </Link>
                            <Grid item xs={7} pt={1} >
                                <Link to='/reset-password'>
                                    <Typography color='white' variant='button' sx={{fontSize:{xs:12, md:15}, '&:hover':{cursor:'pointer'}}}>
                                        Forgot Password?
                                    </Typography>
                                </Link>
                                {/* <Typography  variant='button' onClick={() => {navigate('/reset-password')}} sx={{fontSize:20, '&:hover':{cursor:'pointer'}}}>
                                    Forgot Password?
                                </Typography> */}
                            </Grid>
                        </Grid>
                        
                        {/* { currentUser && <Grid item>
                            <Typography>
                                {`User Email: ${currentUser.email}`}
                            </Typography>
                        </Grid>}*/}
                        {/* { error && <Grid item>
                            <Typography>
                                {`${error}`}
                            </Typography>
                        </Grid>}  */}
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )

}

export default Login
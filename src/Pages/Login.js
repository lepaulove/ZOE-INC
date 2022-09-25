import React, { useState, useEffect } from 'react'
import { Container, Box, Grid, TextField, Button, Typography } from '@mui/material'
import { handleSignUp } from '../Firebase/utils'
import { createTheme, ThemeProvider } from '@mui/material';
import { auth, handleUserProfile, getSnapshotFromUserAuth } from '../Firebase/utils';
import { useSelector, useDispatch } from 'react-redux';
import { emailSignIn } from '../Redux/User/user.actions';

// const mapState = ({ user }) => ({
//     currentUser: user.currentUser
// })

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userAuth, setUserAuth] = useState('')
    const [error, setError] = useState(null)
    const [currentUser, setcurrentUser] = useState('')
    const dispatch = useDispatch()
    // const  currentUser  = useSelector(state => state.user)
    // let currentUser = useSelector(selectUser)
    // console.log(currentUser)
    // const auth = getAuth()
    useEffect(() => {
        auth.onAuthStateChanged(user => { setcurrentUser(user) })

        // return unsubscribe
    }, [currentUser])

    const getEmail = (e) => {
        setError(null)
        let val = e.target.value
        setEmail(val)
    }

    const getPassword = (e) => {
        setError(null)
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

    const print = async () => {
        try {
            
            const {user} = await auth.signInWithEmailAndPassword(email, password)
            dispatch(emailSignIn({user}))
            console.log('action dispatched')
        }catch(err){
            console.log(err)
            switch(err.code){
                case 'auth/invalid-email':
                    setError('Invalid Email')
                    break
                case 'auth/user-not-found':
                case 'auth/wrong-password':
                    setError('Incorrect Email or Password')
                    break
                case 'auth/internal-error':
                    setError('An Error Occured. Please try again')
            }       
        }
        
        
    }

    // console.log(currentUser.user.email)

    return(
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor:'dodgerblue'}}>
                < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', pt: 4, backgroundColor:'transparent'}}>
                    <Grid item>
                        <h1>LOGIN</h1>
                    </Grid>
                    <Grid item container direction='row' justifyContent='center' spacing={{xs:2}}>
                        <Grid item xs={9} md={6.01}>
                            <TextField fullWidth label='EMAIL' value={email} onChange={getEmail}/>
                        </Grid>
                        <Grid item xs={9} md={6.01}>
                            <TextField fullWidth type='password' label='PASSWORD' value={password} onChange={getPassword}/>
                        </Grid>
                        <Grid item xs={8.4} md={6.01}>
                            <Button fullWidth size='large' variant='contained' color='primary' sx={{border:'2px solid white'}} onClick={print}>
                                <Typography>
                                    LOGIN
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={7}>
                            <Typography component='a' href='/create-account'>
                                Need an Accout?
                            </Typography>
                        </Grid>
                        {/* { currentUser && <Grid item>
                            <Typography>
                                {`User Email: ${currentUser.email}`}
                            </Typography>
                        </Grid>}*/}
                        { error && <Grid item>
                            <Typography>
                                {`${error}`}
                            </Typography>
                        </Grid>} 
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )

}

export default Login
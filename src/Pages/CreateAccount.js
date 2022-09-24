import React, { useState} from 'react'
import { Container, Box, Grid, TextField, Button, Typography } from '@mui/material'
import { handleSignUp } from '../Firebase/utils'
import { createTheme, ThemeProvider } from '@mui/material';


const CreateAccount = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const getName = event =>{
        let val = event.target.value
        setName(val)
    }

    const getEmail = event =>{
        let val = event.target.value
        setEmail(val)
    }

    const getPassword = event =>{
        let val = event.target.value
        setPassword(val)
    }

    const getConfirmPassword = event =>{
        let val = event.target.value
        setConfirmPassword(val)
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
        <Box sx={{backgroundColor:'dodgerblue'}}>
            < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', backgroundColor:'transparent'}}>
                <Grid item>
                    <h1>CREATE ACCOUNT</h1>
                </Grid>
                <Grid item container justifyContent='center' spacing={{xs:2}}>
                    <Grid item xs={9}>
                        <TextField fullWidth label='NAME' value={name} onChange={getName}/>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField fullWidth label='EMAIL' value={email} onChange={getEmail}/>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField fullWidth type='password' label='PASSWORD' value={password} onChange={getPassword}/>
                    </Grid>
                    <Grid item xs={9}>
                        <TextField fullWidth type='password' label='CONFIRM PASSWORD' value={confirmPassword} onChange={getConfirmPassword}/>
                    </Grid>
                    <Grid item xs={8.4}>
                        <Button onClick={() => handleSignUp(name, email, password, confirmPassword)} fullWidth size='large' variant='contained' color='primary' sx={{border:'2px solid white'}}>
                            <Typography>
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
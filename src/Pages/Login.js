import React from 'react'
import { Container, Box, Grid, TextField, Button, Typography } from '@mui/material'
import { handleSignUp } from '../Firebase/utils'
import { createTheme, ThemeProvider } from '@mui/material';

const Login = () => {

    // handleSignUp('test1@test.com', '1234567')
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
                        <h1>LOGIN</h1>
                    </Grid>
                    <Grid item container justifyContent='center' spacing={{xs:2}}>
                        <Grid item xs={9}>
                            <TextField fullWidth label='EMAIL'/>
                        </Grid>
                        <Grid item xs={9}>
                            <TextField fullWidth type='password' label='PASSWORD'/>
                        </Grid>
                        <Grid item xs={8}>
                            <Button fullWidth='true' size='large' variant='contained' color='primary' sx={{border:'2px solid white'}}>
                                <Typography>
                                    LOGIN
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography component='a' href='/create-account'>
                                Need an Accout?
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )

}

export default Login
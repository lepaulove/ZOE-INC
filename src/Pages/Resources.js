import React from 'react'
import { Box, Grid, Button, Typography, ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
    palette:{
        primary:{
            main:'#000'
        }
    }
})

export default function Resources() {
  return (
    <ThemeProvider theme={theme}>
        <Box sx={{backgroundColor:'dodgerblue'}}>
            < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', pt: 4, backgroundColor:'transparent'}}>
                <Grid item>
                    <Typography variant='h3' fontWeight='bold'>RESOURCES</Typography>
                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
  )
}

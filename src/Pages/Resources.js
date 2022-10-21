import React from 'react'
import { Box, Grid, Button, Typography, ThemeProvider, createTheme, Card, CardActions, CardContent, CardMedia } from '@mui/material'
import img from '../images/IMG_1213.jpg'

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
            < Grid container direction={{xs: 'row', md: 'column'}} spacing={{xs:4}} alignItems='center' justifyContent='center' sx={{minHeight:'100vh', pt: {xs: 4, md:0}, backgroundColor:'transparent'}}>
                <Grid item>
                    <Typography variant='h3' fontWeight='bold'>RESOURCES</Typography>
                </Grid>
                <Grid item container justifyContent='space-around' spacing={4}>
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, backgroundColor:'black', color:'white' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                            </Card>
                    </Grid>
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, backgroundColor:'black', color:'white' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                            </Card>
                    </Grid>
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, backgroundColor:'black', color:'white' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                Lizard
                                </Typography>
                                <Typography variant="body2">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                            </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    </ThemeProvider>
  )
}

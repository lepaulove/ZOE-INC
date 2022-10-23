import React, { useState, useEffect } from 'react'
import { Box, Grid, Button, Typography, ThemeProvider, createTheme, Card, CardActions, CardContent, CardMedia, Divider, List, ListItem } from '@mui/material'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import img from '../images/IMG_1213.jpg'

const theme = createTheme({
    palette:{
        primary:{
            main:'#000'
        }
    }
})

export default function Resources() {

    const [resources, setResources] = useState([])
    const db = getFirestore()

    const fetchAllResources = async () => {
        const querySnapshot = await getDocs(collection(db, "communityResources"))
        setResources(querySnapshot.docs) 
        // setResources(['this', 'that', 'other']) 
    }

    useEffect(() => {
        if(resources.length < 1)
            fetchAllResources()

        console.log(resources)
        return
    }, [resources])

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{backgroundColor:'dodgerblue', py:4}}>
                < Grid container direction={{xs: 'row', md: 'column'}} spacing={{xs:4}} alignItems='center' justifyContent='center' sx={{minHeight:'100vh', pt: {xs: 4, md:0}, backgroundColor:'transparent'}}>
                    <Grid item>
                        <Typography variant='h3' fontWeight='bold'>RESOURCES</Typography>
                    </Grid>
                    <Grid item container justifyContent='space-around' spacing={4}>
                        {resources.map((item, index) => {
                            console.log(item.data())
                            return(
                                <Grid item>
                                    <Card raised sx={{ maxWidth: 345, height:'100%', backgroundColor:'black', color:'white' }}>
                                        {/* <CardMedia
                                            component="img"
                                            height="140"
                                            image={img}
                                        /> */}
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
                                                {item.data().focus}
                                            </Typography>

                                            <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>

                                            <Typography variant="body3">
                                                {item.data().details}
                                            </Typography>

                                            <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>
                                            
                                                {item.data().contacts.map((item, index) => {
                                                    return(
                                                        <List>
                                                            <ListItem>
                                                                <Typography key={index} variant="body3" fontWeight='bold'>
                                                                    {`${item.contactType}: ${item.contactInfo}`}
                                                                </Typography>
                                                            </ListItem>
                                                        </List>)
                                                })}
                                            
                                        </CardContent>
                                        {/* <CardActions>
                                            <Button size="small">Share</Button>
                                            <Button size="small">Learn More</Button>
                                        </CardActions> */}
                                        </Card>
                                </Grid>)
                        })}                 
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}

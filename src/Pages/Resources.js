import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, ThemeProvider, createTheme, Card, CardContent, Divider, List, ListItem, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { firestore } from '../Firebase/utils';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, getDocs, getFirestore } from "firebase/firestore";

const theme = createTheme({
    palette:{
        primary:{
            main:'#000'
        }
    }
})

export default function Resources() {

    const [resources, setResources] = useState([])
    const [ filteredResources, setFilteredResources ] = useState([])
    const [category, setCategory] = useState('Show All');
    const categories = ['Show All', 'Crisis & Warm Support', 'Covid-19', 'Domestic Violence', 'Sexual Assault', 'LGBTQ+', 'Substance Abuse', 'Veterans', 'Families', 'EDOs', 'Necessities', 'Other']
    const resourceRef = firestore.collection('communityResources')
    const db = getFirestore()

    const fetchAllResources = async () => {
        const querySnapshot = await getDocs(collection(db, "communityResources"))
        setResources(querySnapshot.docs)
    }

    const handleChange = (e) => {
        setCategory(e.target.value);
    }

    
    console.log(`Filtered Resources: ${filteredResources}`)
    console.log(`Resources: ${resources}`)
    console.log(`Current Category: ${category}`)

    useEffect(() => {
        fetchAllResources()
        return
    }, []) 

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ backgroundColor:'#004FFF', background:'linear-gradient(to left bottom, #004FFF, #005 120%)', py:4}}>
                < Grid container direction={{xs: 'row', md: 'column'}} spacing={{xs:4}} alignItems='center' justifyContent='center' sx={{minHeight:'100vh', pt: {xs: 4, md:0}, backgroundColor:'transparent'}}>
                    <Grid item>
                        <Typography variant='h3' color='white' fontWeight='bold'>RESOURCES</Typography>
                    </Grid>
                    <Grid item sx={{minWidth:{xs:'90vw', md:'40vw'}}}>
                        <Box >
                            <FormControl fullWidth>
                            <InputLabel id="select-label">CATEGORY</InputLabel>
                            <Select
                                labelId="select-label"
                                id="select"
                                value={category}
                                label="CATEGORY"
                                onChange={handleChange}
                                size='large'
                                sx={{color:'yellow'}}
                            >
                                {categories.map((item, index) => {
                                    return (<MenuItem key={index} value={`${item}`}>{item}</MenuItem>)
                                })}
                            </Select>
                            </FormControl>
                        </Box>
                    </Grid>
                    <Grid item container justifyContent='space-around' spacing={4}>
                        {resources.filter( i => {return category === 'Show All' ? i.data() : i.data().category === category}).map((item, index) => {
                            return(
                                <Grid item key={index}>
                                    <Card raised sx={{ maxWidth: 345, height:'100%', background:'linear-gradient(180deg, #000, #333 90%)', color:'white' }}>
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
                                        </Card>
                                </Grid>)
                        })}                 
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}
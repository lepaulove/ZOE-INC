import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, ThemeProvider, createTheme, Card, CardContent, Divider, List, ListItem, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { firestore } from '../Firebase/utils';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ResourceCard from '../Components/ResourceCard';

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
            <Box sx={{ backgroundColor:'#181824', py:4}}>
                <Grid container direction={{xs: 'row', md: 'column'}} rowSpacing={{xs:4}} alignItems='center' justifyContent='center' sx={{minHeight:'100vh', maxWidth:'100%'}}>
                    <Grid item>
                        <Typography variant='h3' color='#FFF' fontWeight='bold'>RESOURCES</Typography>
                    </Grid>
                    <Grid item xs={11.5}>
                            <FormControl  fullWidth>
                            <InputLabel id="select-label" sx={{color: '#36BAFE', '&.Mui-focused': {color:'#36BAFE'} }}>CATEGORY</InputLabel>
                            <Select
                                labelId="select-label"
                                id="select"
                                value={category}
                                label="CATEGORY"
                                onChange={handleChange}
                                size='large'
                                sx={{
                                    color: "#36BAFE",
                                    '.MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#36BAFE',
                                    },
                                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#36BAFE',
                                    },
                                    '&:hover .MuiOutlinedInput-notchedOutline': {
                                      borderColor: '#36BAFE',
                                    },
                                    '.MuiSvgIcon-root ': {
                                      fill: "#36BAFE !important",
                                    }
                                  }}
                            >
                                {categories.map((item, index) => {
                                    return (<MenuItem key={index} value={`${item}`}>{item}</MenuItem>)
                                })}
                            </Select>
                            </FormControl>
                    </Grid>
                    <Grid xs={11.5} item container justifyContent='space-around' spacing={4}>
                        {resources.filter( i => {return category === 'Show All' ? i.data() : i.data().category === category}).map((item, index) => {
                            return(
                                <ResourceCard key={index} title={item.data().focus} description={item.data().details} contactList={item.data().contacts}/>
                            )
                        })}
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    )
}
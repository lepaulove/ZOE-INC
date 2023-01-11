import React from 'react'
import { Grid, Card, CardContent, Typography } from '@mui/material'


function ResourceCard(props) {

    const { title, description, contactList} = props

  return (
    <Grid item xs={12}>
        <Card sx={{ height:'100%', backgroundColor:'#262A34', color:'white', p:0 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" fontWeight='bold' fontSize={20} component="div">
                    {title}
                </Typography>
                <Typography variant="body3">
                    {description}
                </Typography>
                {/* <List> */}
                    {/* <ListItem> */}
                        {contactList.map((item, index) => {
                            return(
                            <Grid key={index} container direction='column' pt={2}>
                                <Typography variant="body3" fontWeight='bold' color='#36BAFE'>
                                    {item.contactType}
                                </Typography>
                                <Typography variant="body3" fontWeight='bold'>
                                    {item.contactInfo}
                                </Typography>
                            </Grid>)})}
                    {/* </ListItem> */}
                {/* </List> */}
                
            </CardContent>
            </Card>
    </Grid>
  )
}

export default ResourceCard
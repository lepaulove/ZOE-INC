import React from 'react'
import { Box, Paper, Grid, Typography, Card, CardContent, Divider, Slide } from '@mui/material'
import img from '../Media/images/Picture1.png'
import img2 from '../Media/images/Picture2.png'

const HistorySection = () => {


    return(
        <Box sx={{background:'linear-gradient(to left bottom, #004FFF, #005 70%)', pt:5, pb:2}}>
            <Paper sx={{my:{xs:2, md:15}, mx:{xs:2, md:7}, backgroundColor:'red'}}>
                <Grid container justifyContent='center' direction='column' alignItems='center'>
                    <Grid item>
                        <Typography variant='h3'>WHO ARE WE</Typography>
                    </Grid>
                <Grid item container rowSpacing={7} maxWidth='xl' justifyContent='space-around' height='' alignItems={{xs:'center', md:'center'}} sx={{pb:8, pt:4}}>
                <Slide in={true} direction='right' timeout={1000}>
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, maxHeight:{xs:'20%', md:'35%'}, background:'linear-gradient(180deg, #000, #333 90%)', color:'white' }}>
                            <CardContent sx={{display:'flex', backgroundImage:`url(${img})`, alignItems:'center', flexDirection:'column'}}>
                                <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
                                WHO ARE WE
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>

                                <Typography variant="body3">
                                ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 parent/guardians 
                                of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a 
                                success. The Organization was founded in 'DATE?' by Dr. J. Kiani Rodriguez and Sermario Wiggins with a vision to '?????'. 
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>                                            
                            </CardContent>
                        </Card>
                    </Grid>
                </Slide>
                <Slide in={true} direction='top' timeout={1000}>
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, height:'35%', background:'linear-gradient(180deg, #000, #333 90%)', color:'white' }}>
                            <CardContent sx={{display:'flex', backgroundImage:`url(${img2})`, alignItems:'center', flexDirection:'column'}}>
                                <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
                                {'Our Mission'.toLocaleUpperCase()}
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>

                                <Typography variant="body3">
                                ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 parent/guardians 
                                of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a 
                                success. The Organization was founded in 'DATE?' by Dr. J. Kiani Rodriguez and Sermario Wiggins with a vision to '?????'.
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>                                            
                            </CardContent>
                        </Card>
                    </Grid>
                </Slide>
                <Slide in={true} direction='left' timeout={1000}>
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, height:'35%', background:'linear-gradient(180deg, #000, #333 90%)', color:'white' }}>
                            <CardContent sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
                                {'What we Offer'.toLocaleUpperCase()}
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>

                                <Typography variant="body3">
                                ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 parent/guardians 
                                of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a 
                                success. The Organization was founded in 'DATE?' by Dr. J. Kiani Rodriguez and Sermario Wiggins with a vision to '?????'.
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>                                            
                            </CardContent>
                        </Card>
                    </Grid>
                </Slide>
                {/* <h1 style={{alignSelf:'center', color:'#CC0099'}}>HISTORY</h1>
                <p style={{alignSelf:'center', color:'silver'}}>ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 parent/guardians 
                of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a 
                success. The Organization was founded in 'DATE?' by Dr. J. Kiani Rodriguez and Sermario Wiggins with a vision to '?????'.</p> */}
                </Grid>
                </Grid>
            </Paper>
        </Box>
        
    )
}

export default HistorySection
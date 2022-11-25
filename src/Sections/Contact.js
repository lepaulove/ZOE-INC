import React from 'react'
import { Box, Paper, Grid, Typography, Card, CardContent, Divider } from "@mui/material";

const Contact = () => {


    return(
        <Box sx={{background:'linear-gradient(to right top, #004FFF, #005 70%)', pt:5, pb:2}}>
            <Paper sx={{my:{xs:2, md:15}, mx:{xs:2, md:7}, pt: 4, background:'linear-gradient(to left bottom, #000, #fff 180%)'}}>
                <Grid container justifyContent='center' direction='column' alignItems='center'>
                    <Grid item>
                        <Typography variant='h3' color='silver'>{'Contact Us'.toLocaleUpperCase()}</Typography>
                    </Grid>
                <Grid item container rowSpacing={7} maxWidth='xl' justifyContent='space-around' height='' alignItems={{xs:'center', md:'center'}} sx={{pb:8, pt:4}}>
                {/* <Slide in={true} direction='right' timeout={1000}> */}
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, maxHeight:{xs:'20%', md:'35%'}, background:'linear-gradient(180deg, #000, #0D0369 90%)', color:'white' }}>
                            <CardContent sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                <Typography gutterBottom variant="h5" fontWeight='bold' component="div" sx={{pb:-3}}>
                                 {'Address'.toLocaleUpperCase()}
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>

                                <Typography variant="h6">
                                Microbusiness Enterprise Center
                                </Typography>
                                <Typography variant="h6">
                                230 South Jackson St. Suite 158
                                </Typography>
                                <Typography variant="h6">
                                Albany, Georgia 31701
                                </Typography>
                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>                                            
                            </CardContent>
                        </Card>
                    </Grid>
                {/* </Slide> */}
                {/* <Slide in={true} direction='top' timeout={1000}> */}
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, height:'35%', background:'linear-gradient(180deg, #000, #0D0369 90%)', color:'white' }}>
                            <CardContent sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
                                    {'Phone'.toLocaleUpperCase()}
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>

                                <Typography variant="h6" fontWeight={700}>
                                {'By appointment only'.toLocaleUpperCase()}
                                </Typography>
                                <Typography variant="h6" fontSize={16}>
                                229-789-3300
                                </Typography>
                                <Typography variant="h6" fontSize={16}>
                                229-789-4400
                                </Typography>
                                <Typography variant="h6" fontWeight={700} sx={{pt:3}}>
                                24 hour Crisis Line
                                </Typography>
                                <Typography variant="h6" fontSize={16}>
                                229-431-0217
                                </Typography>
                                

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>                                            
                            </CardContent>
                        </Card>
                    </Grid>
                {/* </Slide> */}
                {/* <Slide in={true} direction='left' timeout={1000}> */}
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, height:'35%', background:'linear-gradient(180deg, #000, #0D0369 90%)', color:'white' }}>
                            <CardContent sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
                                {'Email'.toLocaleUpperCase()}
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>

                                <Typography variant="h6">
                                zoecounselinggroup@gmail.com
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>                                            
                            </CardContent>
                        </Card>
                    </Grid>
                {/* </Slide> */}
                {/* <h1 style={{alignSelf:'center', color:'#CC0099'}}>HISTORY</h1>
                <p style={{alignSelf:'center', color:'silver'}}>ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 parent/guardians 
                of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a 
                success. The Organization was founded in 'DATE?' by Dr. J. Kiani Rodriguez and Sermario Wiggins with a vision to '?????'.</p> */}
                </Grid>
                </Grid>
                    <Box sx={{height:{xs:'450px', md:'600px'}, width:'auto', pl:{xs:1, md:4}, pr:{xs:2, md:5}, pb:{xs:2, md:4}}}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.1771581829275!2d-84.15538898255615!3d31.574189400000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f279700f24a1a7%3A0x8dfa2dd9c66031f!2s230%20S%20Jackson%20St%2C%20Albany%2C%20GA%2031701!5e0!3m2!1sen!2sus!4v1669404460176!5m2!1sen!2sus" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Box>
            </Paper>
        </Box>
    )
}

export default Contact
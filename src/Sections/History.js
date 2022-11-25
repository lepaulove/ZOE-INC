import React from 'react'
import { Box, Paper, Grid, Typography, Card, CardContent, Divider, Slide } from '@mui/material'
import { ArrowBackIosSharp } from '@mui/icons-material'
import Accordion, { AccordionProps } from '@mui/material/Accordion'
import AccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import img from '../Media/images/Picture1.png'
import img2 from '../Media/images/Picture2.png'

const HistorySection = () => {


    return(
        <Box sx={{background:'linear-gradient(to left bottom, #004FFF, #005 70%)', pt:5, pb:2}}>
            <Paper sx={{my:{xs:2, md:15}, mx:{xs:2, md:7}, pt: 4, background:'linear-gradient(to left bottom, #000, #fff 180%)'}}>
                <Grid container justifyContent='center' direction='column' alignItems='center'>
                    <Grid item>
                        <Typography variant='h3' color='silver'>{'WHO ARE WE'.toLocaleUpperCase()}</Typography>
                    </Grid>
                    <HistoryContentFull />
                    <HistoryContentMobile />
                </Grid>
            </Paper>
        </Box>
        
    )
}

const HistoryContentFull = () => {
return(<Grid item container rowSpacing={7} maxWidth='xl' justifyContent='space-around' height='' display={{xs:'none', md:'flex'}} sx={{pb:8, pt:4}}>
                <Slide in={true} direction='right' timeout={1000}>
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, height:{xs:'20%', md:'100%'}, background:'linear-gradient(180deg, #000, #0D0369 90%)', color:'white' }}>
                            <CardContent sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                <Typography gutterBottom variant="h5" fontWeight='bold' component="div" sx={{pb:-3}}>
                                {'Who'.toLocaleUpperCase()}
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>

                                <Typography variant="body3">
                                    ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 or parent/guardians 
                                    of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a 
                                    success.
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>                                            
                            </CardContent>
                        </Card>
                    </Grid>
                </Slide>
                <Slide in={true} direction='up' timeout={1000}>
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, height:'100%', background:'linear-gradient(180deg, #0D0369, #000 90%)', color:'white' }}>
                            <CardContent sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
                                    {'When'.toLocaleUpperCase()}
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>

                                <Typography variant="body3">
                                    The Organization was founded in 2022 by Dr. J. Kiani Rodriguez and Sermario Wiggins with a vision to help young parents navigate the challenging and exciting world of parenting. 
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>                                            
                            </CardContent>
                        </Card>
                    </Grid>
                </Slide>
                <Slide in={true} direction='left' timeout={1000}>
                    <Grid item>
                        <Card raised sx={{ maxWidth: 345, height:'100%', background:'linear-gradient(180deg, #000, #0D0369 90%)', color:'white' }}>
                            <CardContent sx={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                <Typography gutterBottom variant="h5" fontWeight='bold' component="div">
                                {'Where'.toLocaleUpperCase()}
                                </Typography>

                                <Divider sx={{backgroundColor:'dodgerblue', my:2.5}} variant='middle'/>

                                <Typography variant="body3">
                                ZOE INC and ASSOCIATES® works with Albany State University
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
                </Grid>)
}

const HistoryContentMobile = () => {
    const [expanded, setExpanded] = React.useState('');

    const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
    };

    return(
        <Grid container alignItems='center' justifyContent='center' display={{xs:'flex', md:'none'}}>
            <Slide in={true} direction='right' timeout={1000}>
                <Grid item sx={{p:2}}>
                    <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{background:'linear-gradient(180deg, #000, #0D0369 90%)', color:'white'}}>
                        <AccordionSummary>
                            <Typography fontWeight={700}>{'Who'.toLocaleUpperCase()}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 or parent/guardians 
                                of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a 
                                success.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Slide>
            <Slide in={true} direction='left' timeout={1000}>
                <Grid item sx={{p:2}}>
                    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} sx={{background:'linear-gradient(180deg, #000, #0D0369 90%)', color:'white'}}>
                        <AccordionSummary>
                            <Typography fontWeight={700}>{'When'.toLocaleUpperCase()}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                The Organization was founded in 2022 by Dr. J. Kiani Rodriguez and Sermario Wiggins with a vision to help young parents navigate the challenging and exciting world of parenting.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Slide>
            <Slide in={true} direction='right' timeout={1000}>
                <Grid item sx={{p:2}}>
                    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} sx={{background:'linear-gradient(180deg, #000, #0D0369 90%)', color:'white'}}>
                        <AccordionSummary>
                            <Typography fontWeight={700}>{'Where'.toLocaleUpperCase()}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                ZOE INC and ASSOCIATES® works with Albany State University
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Grid>
            </Slide>
        </Grid>
        
    )
}

export default HistorySection
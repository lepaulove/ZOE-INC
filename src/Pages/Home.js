import React from 'react'
import History from '../Sections/History'
import Purpose from '../Sections/Purpose'
import About from '../Sections/About'
import Contact from '../Sections/Contact'
import GetInvolved from '../Sections/Get-Involved'
import { Box, Card, CardContent, Typography, Grid } from '@mui/material'
import headerImage from './../Media/images/pexels-monstera-5384621.jpg'
import HomePageCards from '../Components/HomePageCards'

const Home = (props) => {

    const { historyRef, 
    purposeRef, 
    aboutRef, 
    contactRef, 
    getInvolvedRef} = props

    return(
        <Box sx={{backgroundColor:'#181824', height:'100%', pt:0}}>
            <Grid container>
                {/* <Grid item container sx={{zIndex:0, WebkitFilter:'brightness(50%)', backgroundImage:`url(${headerImage})`, padding:0, display:'block', margin:'0 auto', backgroundSize:'100% 100%', height:250}}> */}
                <Grid item container display='flex' alignItems='center' justifyContent='center' sx={{zIndex:10, position:'relative'}}>
                    <Grid item sx={{zIndex:5, position:'absolute'}}><Typography variant='h5' fontWeight='bold' fontSize={35} color='#FFF'>THE POWER OF LIFE...</Typography></Grid>
                    <Grid item sx={{zIndex:0, WebkitFilter:'brightness(50%)'}}><img src={headerImage} style={{padding:0, display:'block', margin:'0 auto', maxHeight:'100%', maxWidth:'100%'}}/></Grid>
                </Grid>
            <Grid item sx={{px:1.5, my:-5, zIndex:10, mb:5}}>
                <HomePageCards header={'WHO ARE WE?'} body={'ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 or parent/guardians of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a success.'}/>
                <HomePageCards header={'WHEN IT STARTED'} body={'ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 or parent/guardians of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a success.'}/>
                <HomePageCards header={'WHERE WE WORK?'} body={'ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 or parent/guardians of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a success.'}/>
                <HomePageCards header={'OUR VISION'} body={'ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 or parent/guardians of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a success.'}/>
                <HomePageCards header={'OUR MISSION'} body={'ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 or parent/guardians of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a success.'}/>
                <HomePageCards header={'WHAT WE OFFER'} body={'ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 or parent/guardians of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a success.'}/>
                <HomePageCards header={'GET INVOLVED!'} body={'ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 or parent/guardians of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a success.'}/>
                </Grid>
                <Grid item container direction='column' sx={{ my:-0, zIndex:10, mb:5}}>
                    <Typography color='#FFF' fontSize={25} fontWeight='bold'>CONTACT US</Typography>
                        <Grid item container direction='column' sx={{backgroundColor:'#36BAFE', borderRadius:3, pt:3}}>
                            <Grid item container  rowSpacing={3.5} sx={{px:3, pb:3}}>
                                <Grid item xs={12}><Typography color='#FFF'>Email</Typography><Typography color='#FFF' fontWeight={700}>zoecounselinggroup@gmail.com</Typography></Grid>
                                <Grid item xs={12}><Typography color='#FFF'>{`Phone (By Appointment Only)`}</Typography><Typography color='#FFF' fontWeight={700}>229-789-3300</Typography><Typography color='#FFF' fontWeight={700}>229-789-4400</Typography></Grid>
                                <Grid item xs={12}><Typography color='#FFF'>24Hour Crisis Line</Typography><Typography color='#FFF' fontWeight={700}>229-431-0217</Typography></Grid>
                                <Grid item xs={12}><Typography color='#FFF'>Address</Typography><Typography color='#FFF' fontWeight={700}>Microbusines Enterprise Center, 230 South Jackson St. Suite 158, Albany, Geotgia 31701</Typography></Grid>
                        </Grid>
                        <Grid item sx={{borderRadius:3, height:350}}><iframe style={{borderRadius:15}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.1771581829275!2d-84.15538898255615!3d31.574189400000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f279700f24a1a7%3A0x8dfa2dd9c66031f!2s230%20S%20Jackson%20St%2C%20Albany%2C%20GA%2031701!5e0!3m2!1sen!2sus!4v1669404460176!5m2!1sen!2sus" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Home
import React from 'react'
import { Container } from "@mui/material";

const About = () => {


    return(
        <div style={{background:'linear-gradient(to left bottom, orange, #005 120%)'}}>
            <Container maxWidth='xl' sx={{display:'flex', justifyContent:'center', height:'75vh'}}>
                <h1>ABOUT</h1>
            </Container>
        </div>
    )
}

export default About
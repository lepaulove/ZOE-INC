import React from 'react'
import { Container } from "@mui/material";

const HistorySection = () => {


    return(
        <div style={{backgroundColor:'#080F5B'}}>
            <Container maxWidth='xl' sx={{display:'flex', alignItems:'center', flexDirection:'column', height:'75vh'}}>
                <h1 style={{alignSelf:'center', color:'#CC0099'}}>HISTORY</h1>
                <p style={{alignSelf:'center', color:'silver'}}>ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 parent/guardians 
                                                of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a 
                                                success. The Organization was founded in 'DATE?' by Dr. J. Kiani Rodriguez and Sermario Wiggins with a vision to '?????'.</p>
            </Container>
        </div>
    )
}

export default HistorySection
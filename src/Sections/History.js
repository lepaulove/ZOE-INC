import React from 'react'
import { Container } from "@mui/material";

const HistorySection = () => {


    return(
        <div style={{backgroundColor:'dodgerblue'}}>
            <Container maxWidth='xl' sx={{display:'flex', alignItems:'center', flexDirection:'column', height:'75vh', backgroundColor:'dodgerblue'}}>
                <h1 style={{alignSelf:'center'}}>HISTORY</h1>
                <p style={{alignSelf:'center'}}>ZOE INC and ASSOCIATES® is a Community Driven Organization that works with teens ages 15 - 22 parent/guardians 
                                                of parenting teens to provide them with mentoring guidance and resources to help make their parenting journey a 
                                                success. The Organization was founded in 'DATE?' by Dr. J. Kiani Rodriguez and Sermario Wiggins with a vision to '?????'.</p>
            </Container>
        </div>
    )
}

export default HistorySection
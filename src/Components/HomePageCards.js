import React from 'react'
import { Card, CardContent, Typography } from '@mui/material'

function HomePageCards(props) {
    const { header, body } = props
  return (
<Card sx={{backgroundColor:'#262A34', mt:2, borderRadius:3}}>
    <CardContent sx={{px:1, py:.5}}>
        <Typography color='#36BAFE' variant='h4' fontWeight={700} fontFamily='monospace'>
            {header}
        </Typography>
        <Typography color='#FFF' fontFamily='monospace' lineHeight={1} fontSize={15}>
            {body}
        </Typography>
    </CardContent>
</Card>)}

export default HomePageCards
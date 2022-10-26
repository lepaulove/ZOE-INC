import React, { useEffect } from 'react'
import { Button } from '@mui/material'

const NavButton = (props) => {
    

    const { page, clickHandler, reference } = props

    
  return (
    <Button
        key={page}
        component={props.componentType}
        href={props.redirect}
        onClick={() => clickHandler(reference)}
        sx={{ my: 2, mx: 1, color: 'white', display: 'block', '&:hover':{color:'#0FF', cursor:'pointer'} }}
    >
        {page}
    </Button>
  )
}

export default NavButton

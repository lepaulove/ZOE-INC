import React, { useEffect } from 'react'
import { Button } from '@mui/material'

const NavButton = (props) => {
    
    
    let stuff
    
    useEffect(() => {
        stuff = props
    }, [stuff])

    const { page, clickHandler, reference } = props

    
  return (
    <Button
        key={page}
        onClick={() => clickHandler(reference)}
        sx={{ my: 2, mx: 1, color: 'white', display: 'block', "&:hover":{color:'#0FF'} }}
    >
        {page}
    </Button>
  )
}

export default NavButton

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})


export default function ChatMessage(props) {
    // const { text, uid, photoURL } = props.message;
    const { text, uid, userName, createdAt } = props.message;
    const { currentUser } = useSelector(mapState)
    const [flex, setFlex] = useState('flex-start')
    const date = new Date(createdAt.seconds * 1000)

    useEffect(() => {
      console.log(uid)
      setFlex(uid === currentUser.uid ? 'flex-end' : 'flex-start')
      // console.log(`${uid}: ${flex}`)
    }, [flex])

  
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      {/* <div style={{ display:'flex', flexdirection:'column', backgroundColor:'white', marginTop:8, marginBottom:8, borderRadius:8, padding:6, border:'3px solid black'}}> */}
        {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
        <Grid container justifyContent={flex}>
          <Grid flexDirection='column' backgroundColor='white' sx={{my: .3, borderRadius: 2, padding: .5, border:'3px solid black', width: '75%', }}>
            <Grid container justifyContent='space-between'>
              <Grid item>
                <Typography fontSize={12} fontWeight='bold'>{userName + ':' + " "}</Typography>
              </Grid>
              <Grid item >
                <Typography fontSize={12}>{date.toDateString()}</Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography fontSize={12}>{text}</Typography>
            </Grid>
          </Grid>
        </Grid>
        
      {/* </div> */}
    </>)
  }

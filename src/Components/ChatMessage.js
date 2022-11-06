import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { withTheme } from 'styled-components';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})


export default function ChatMessage(props) {
    // const { text, uid, photoURL } = props.message;
    const { text, uid, userName, createdAt } = props.message;
    const { currentUser } = useSelector(mapState)
    const [user, setUser] = useState(currentUser)
    const [myMessage, setMyMessage] = useState(false)
    const date = new Date(createdAt.seconds * 1000)

    useEffect(() => {
      // console.log(uid)
      setMyMessage(uid === user.uid)
      console.log(`UID: ${uid} Current User ID: ${user.uid}`)
      // console.log(`${uid}: ${flex}`)
    }, [user])

  
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      {/* <div style={{ display:'flex', flexdirection:'column', backgroundColor:'white', marginTop:8, marginBottom:8, borderRadius:8, padding:6, border:'3px solid black'}}> */}
        {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
        <Grid container justifyContent={myMessage ? 'flex-end' : 'flex-start'}>
          <Grid flexDirection='column' backgroundColor={myMessage ? 'black' : '#1955db'} sx={{my: .3, borderRadius: 2, padding: .5, border: myMessage ? '4px solid #1955db' : '4px solid black', width: '75%', color: myMessage ? '#4679ea' : '#fff'}}>
            <Grid container justifyContent='space-between' sx={{}}>
              <Grid item >
                <Typography fontSize={{xs:12, md:20}} fontWeight='bold'>{userName + ':' + " "}</Typography>
              </Grid>
              <Grid item >
                <Typography fontSize={{xs:12, md:20}}>{date.toDateString()}</Typography>
              </Grid>
            </Grid>
            <Grid>
              <Typography fontSize={{xs:12, md:20}}>{text}</Typography>
            </Grid>
          </Grid>
        </Grid>
        
      {/* </div> */}
    </>)
  }

import React from 'react'
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})


export default function ChatMessage(props) {
    // const { text, uid, photoURL } = props.message;
    const { text, uid, userName } = props.message;
    const { currentUser } = useSelector(mapState)
    const messageClass = uid === currentUser.uid ? 'sent' : 'received'

  
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div style={{ display:'flex', flexdirection:'column', backgroundColor:'white', marginTop:8, marginBottom:8, borderRadius:8, padding:6, border:'3px solid black'}}>
        {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
        <Typography variant='h6' fontWeight='bold'>{`${userName}:`}</Typography><Typography variant='h6'>{`${text}`}</Typography>
      </div>
    </>)
  }

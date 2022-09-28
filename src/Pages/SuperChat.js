import React, { useState } from 'react'
import { firestore } from '../Firebase/utils'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Box, Grid, TextField, Button } from '@mui/material'
import ChatMessage from '../Components/ChatMessage';
import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

export const SuperChat = (props) => {

    const [message, setMessage] = useState()
    const { currentUser } = useSelector(mapState)
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)
    

    const [messages] = useCollectionData(query, {idField: 'id'})

    const sendMessage = async() => {
        const uid = currentUser.uid
        await messagesRef.add({
            text: message,
            createdAt: new Date(),
            uid
        })
        setMessage('')
    }

  return (
    <Box sx={{backgroundColor:'dodgerblue', p:10}}>
            < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', backgroundColor:'transparent'}}>
                <Grid item>
                    <h1>Community Square</h1>
                </Grid>
                <Grid item container direction='column' justifyContent='center' spacing={{xs:2}}>
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
                    <Grid item>
                    <TextField fullWidth label='Enter Message...' value={message} onChange={(e) => { setMessage(e.target.value) }} />
                    <Button onClick={() => sendMessage()}>
                        SEND
                    </Button>
                </Grid>
                </Grid>
                
            </Grid>
        </Box>
  )
}

const mapStateToProps = (state) => ({})

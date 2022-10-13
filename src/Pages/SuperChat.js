import React, { useState } from 'react'
import { firestore } from '../Firebase/utils'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Box, Grid, TextField, Button, Typography, Paper } from '@mui/material'
import ChatMessage from '../Components/ChatMessage';
import { useSelector } from 'react-redux';

const mapUserState = ({ user }) => ({
    currentUser: user.currentUser
})

const mapUserDataState = ({user}) => ({
    userProfileData: user.userProfileData
})

export const SuperChat = (props) => {

    const [message, setMessage] = useState()
    const { currentUser } = useSelector(mapUserState)
    const { userProfileData } = useSelector(mapUserDataState)
    const messagesRef = firestore.collection('messages')
    const query = messagesRef.orderBy('createdAt').limit(25)

    console.log(messagesRef)
    

    const [messages] = useCollectionData(query, {idField: 'id'})

    const sendMessage = async() => {
        const uid = currentUser.uid
        const userName = userProfileData.displayName
        await messagesRef.add({
            text: message,
            createdAt: new Date(),
            uid,
            userName
        })
        setMessage('')
    }
  return (
     <Box sx={{backgroundColor:'dodgerblue', py:5, pl:4.5, pr:4, height:'100vh'}}>
            {currentUser ? < Grid container direction='column' spacing={{xs:4}} alignItems='center' sx={{height:'100vh', backgroundColor:'transparent'}}>
                <Grid item>
                    <Typography variant='h5' fontWeight='bold'>
                        Community Square
                    </Typography>
                </Grid>
                <Paper item container elevation={10} direction='column' spacing={{xs:2}} sx={{backgroundColor: 'gray', width:{xs:'90vw', md:'80vw'}, height:'75vh', borderRadius:10, p:{xs:2, md:6}}}>
                    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
                    <Grid container item justifyContent='flex-end' >
                        <TextField fullWidth label='Enter Message...' value={message} onChange={(e) => { setMessage(e.target.value) }} sx={{ input:{ color: 'white'}, borderRadius:3, color:'white'}}/>
                        <Button fullWidth onClick={() => sendMessage()} sx={{height:50, backgroundColor:'black', mt:1, fontSize:40, border:'3px solid white', color:'#fff', fontWeight:'bold'}}>
                            SEND
                        </Button>
                    </Grid>
                </Paper>  
            </Grid> : <Typography>YOU MUST BE LOGGED IN TO VIEW THIS PAGE...</Typography>}
        </Box>
  )

}



import React from 'react'
import { useSelector } from 'react-redux';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})


export default function ChatMessage(props) {
    // const { text, uid, photoURL } = props.message;
    const { text, uid } = props.message;
    const { currentUser } = useSelector(mapState)
    const messageClass = uid === currentUser.uid ? 'sent' : 'received'

  
    // const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  
    return (<>
      <div >
        {/* <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} /> */}
        <p>{text}</p>
      </div>
    </>)
  }

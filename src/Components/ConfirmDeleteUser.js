import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { firestore } from '../Firebase/utils';


export default function ConfirmDeleteUser(props) {
    const { onClose, selectedValue, open } = props;
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

    // const [userID, setUserId] = useState('')
    // const [displayName, setDisplayName] = useState('')

    // useEffect(() => {
    //   setUserId(user.id)
    //   setDisplayName(user.data().displayName)
    // }, [])

  const deleteUser = (documentID) => {
    alert(`user with ID ${documentID} deleted`)
    firestore.collection('users').doc(documentID).delete()
  }

  const handleDeleteClose = () => {
    // if(user)
    deleteUser(selectedValue.id) 
    
    onClose()
  };

  const handleClose = () => {
    onClose()
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      {/* {props.theButton} */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Delete user ${selectedValue.data().displayName}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {`Permanently Delete ${selectedValue.data().displayName}?`}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteClose}>Delete</Button>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
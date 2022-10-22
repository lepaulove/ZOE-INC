import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField, Grid } from '@mui/material';
import { firestore } from '../Firebase/utils';


export default function AddResource(props) {
    const { open, onClose } = props;
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

  const handleSendClose = () => {
//     // if(user)
//     deleteUser(selectedValue.id) 
    
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
          CREATE A NEW RESOURCE
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Grid container rowSpacing={1.5} sx={{mt:1}}>
                <Grid container item spacing={1.5}>
                    <Grid item xs={6}>
                        <TextField label='Category' fullWidth/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label='Focus' fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label='Format' fullWidth/>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12}>
                        <TextField label='Details' fullWidth multiline minRows={4}/>
                    </Grid>
                </Grid>
            </Grid>
            
            {/* {`Permanently Delete ${selectedValue.data().displayName}?`} */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSendClose}>Send</Button>
          <Button onClick={handleClose} autoFocus>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
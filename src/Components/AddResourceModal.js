import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { TextField, Grid } from '@mui/material';
import { firestore } from '../Firebase/utils';


export default function AddResourceModal(props) {
    const { open, onClose } = props;
    
    const [category, setCategory] = useState('')
    const [focus, setFocus] = useState('')
    const [contactType, setContactType] = useState('')
    const [contactInfo, setContactInfo] = useState('')
    const [details, setDetails] = useState('')
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
                    <Grid item container rowSpacing={1.5}>
                      <Grid item xs={12}>
                          <BasicSelect />
                      </Grid>
                      <Grid item xs={12}>
                          <TextField label='Contact Info' fullWidth/>
                      </Grid>
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

function BasicSelect() {
    const [contactType, setContactType] = useState('')
    const contactTypes = ['Hotline', 'Chat', 'Website', 'Text', 'App', 'Online Forum', 'Online Meetings', 'Local Meetings', 'Help Line']
  
    const handleChange = (e) => {
      setContactType(e);
    };
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="simple-select-label">Contact Type</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={contactType}
            label="Contact Type"
            onChange={handleChange}
          >{contactTypes.map((item, index) => {
            return (<MenuItem key={index} value={item}>{item}</MenuItem>)
          })}
          </Select>
        </FormControl>
      </Box>
    );
  }
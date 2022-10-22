import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
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
import styled from 'styled-components';
import { TextField, Grid, List, ListItem } from '@mui/material';
import { firestore } from '../Firebase/utils';

const BootstrapButton = styled(Button)({
  backgroundColor: '#000',
  marginLeft: 40
})

const mapUserState = ({ user }) => ({
  currentUser: user.currentUser
})

const mapUserDataState = ({user}) => ({
  userProfileData: user.userProfileData
})

export default function AddResourceModal(props) {
    const { open, onClose } = props;
    
    const [category, setCategory] = useState('')
    const [focus, setFocus] = useState('')
    const [contactType, setContactType] = useState('')
    const [contactInfo, setContactInfo] = useState('')
    const [details, setDetails] = useState('')
    const [selectedContactTypes, setSelectedContactTypes] = useState([])
    const contactTypes = ['Hotline', 'Warm Line', 'Chat', 'Website', 'Text', 'App', 'Online Forum', 'Online Meetings', 'Online Support Groups', 'Local Meetings', 'Help Line']
    const categories = ['Crisis & Warm Support', 'Covid-19', 'Domestic Violence', 'Sexual Assault', 'LGBTQ+', 'Substance Abuse', 'Veterans', 'Families', 'EDOs', 'Necessities', 'Other']
    const communityReseourceRef = firestore.collection('communityResources')
    const { currentUser } = useSelector(mapUserState)
    const { userProfileData } = useSelector(mapUserDataState)

    const handleCategoryChange = e => {
      setCategory(e.target.value)
    }

    const handleContactTypeChange = e => {
      setContactType(e.target.value)
    }

    const handleContactInfoChange = e => {
      setContactInfo(e.target.value)      
    }

    const handleDetailsChange = e => {
      setDetails(e.target.value)      
    }

    const handleFocusChange = e => {
      setFocus(e.target.value)      
    }

    const resetState = () => {
      setCategory('')
      setFocus('')
      setContactType('')
      setContactInfo('')
      setDetails('')
      setSelectedContactTypes([])
    }

    const handleAddContactInfo = () => {
      setSelectedContactTypes([...selectedContactTypes, {contactType: contactType, contactInfo: contactInfo}])
      setContactType('')
      setContactInfo('')
      console.log(selectedContactTypes)
    }
  
  const handleSendClose = async () => {
//     // if(user)
//     deleteUser(selectedValue.id)
    const uid = currentUser.uid
    const userName = userProfileData.displayName
    await communityReseourceRef.add({
      category: category,
      focus: focus,
      details: details,
      contacts: selectedContactTypes,
      createdDate: new Date(),
      createdBy: userName,
      uid
    })
    console.log(`Category: ${category}\nFocus: ${focus}\nDetails: ${details}\nConatct:${selectedContactTypes}`)
    resetState()
    
    onClose()
  };

  const handleClose = () => {
    resetState()
    onClose()
  };

  return (
    <>
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
                    <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="simple-select-label">Category</InputLabel>
                            <Select
                              labelId="simple-select-label"
                              id="simple-select"
                              value={category}
                              label="Contact Type"
                              onChange={handleCategoryChange}
                            >{categories.map((item, index) => {
                              return (<MenuItem key={index} value={item}>{item}</MenuItem>)
                            })}
                            </Select>
                          </FormControl>
                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField label='Focus' fullWidth value={focus} onChange={handleFocusChange}/>
                    </Grid>
                    <Grid item container rowSpacing={1.5}>
                      <Grid item xs={12}>
                        <Box sx={{ minWidth: 120 }}>
                          <FormControl fullWidth>
                            <InputLabel id="simple-select-label">Contact Type</InputLabel>
                            <Select
                              labelId="simple-select-label"
                              id="simple-select"
                              value={contactType}
                              label="Contact Type"
                              onChange={handleContactTypeChange}
                            >{contactTypes.map((item, index) => {
                              return (<MenuItem key={index} value={item}>{item}</MenuItem>)
                            })}
                            </Select>
                          </FormControl>
                        </Box>
                      </Grid>
                      <Grid item xs={12}>
                          <TextField label='Contact Info' fullWidth value={contactInfo} onChange={handleContactInfoChange}/>
                      </Grid>
                      <BootstrapButton variant='contained' onClick={() => handleAddContactInfo()}>Add Contact Info</BootstrapButton>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12}>
                        <TextField label='Details' fullWidth multiline minRows={4} value={details} onChange={handleDetailsChange}/>
                    </Grid>
                </Grid>
                <Grid container item>
                    <Grid item xs={12}>
                        <List>
                          {selectedContactTypes.map((item, index)=> {
                            return <ListItem key={index}>{` - Type: ${item.contactType} Info: ${item.contactInfo}`}</ListItem>
                          })}
                        </List>
                    </Grid>
                </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSendClose}>Send</Button>
          <Button onClick={handleClose} autoFocus>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function BasicSelect() {
    const [contactType, setContactType] = useState('')
    const contactTypes = ['Hotline', 'Chat', 'Website', 'Text', 'App', 'Online Forum', 'Online Meetings', 'Local Meetings', 'Help Line']
  
    const handleChange = (e) => {
      setContactType(e.target.value);
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
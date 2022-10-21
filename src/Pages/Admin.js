import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Paper, Typography, InputLabel, MenuItem, FormControl } from '@mui/material';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import { firestore } from '../Firebase/utils';
import ConfirmDeleteUser from '../Components/ConfirmDeleteUser';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const mapUserState = ({user}) => ({
    currentUser: user.currentUser
})

const mapUserDataState = ({user}) => ({
    userProfileData: user.userProfileData
})

export default function Admin() {

    const { currentUser } = useSelector(mapUserState)
    const { userProfileData } = useSelector(mapUserDataState)
    const [users, setUsers] = useState([])
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();
    const [selectedValue2, setSelectedValue2] = React.useState();
    const db = getFirestore()

    const fetchAllUsers = async () => {
        const querySnapshot = await getDocs(collection(getFirestore(), "users"));
        setUsers(querySnapshot.docs)
    };

    useEffect(() => {
        fetchAllUsers()
    }, [])

   const deleteUser = (documentID) => {
        firestore.collection('users').doc(documentID).delete()
        fetchAllUsers()
    }

    const handleClickOpen = (id) => {
        // if(id === selectedValue2){
            setOpen(true);
            console.log(`Deleting User ${id}`)
        // }
            
        
      };
    
      const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
      };
    
    

  return (
    // <div style={{paddingTop:50}}>{userProfileData.userRoles[0] === 'user' ? 'YOU ARE NOT AN ADMIN' : 'WELCOME ADMIN'}</div>
    <Box sx={{pt: 10, backgroundColor:'dodgerblue', height:'100vh'}}>
        { userProfileData && userProfileData.userRoles[0] === 'admin' ? <TableContainer component={Paper} sx={{width:'100%'}}>
            <Table sx={{ minWidth: 650, backgroundColor:'dodgerblue'}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><Typography color='white' fontWeight='bold'>Name</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'>Email</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'>User Role</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'>Date Created</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'>Delete</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, index) => {
                        const date = new Date(user.data().createdDate.seconds * 1000)
                        return(
                        <TableRow key={index}  sx={{ "&:hover":{color:'#0FF', backgroundColor:'#555'}}}>
                            <TableCell>
                                <Typography color='yellow'>{user.data().displayName ? user.data().displayName : 'NO NAME WAS ENTERED'}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color='yellow'>{user.data().email}</Typography>
                            </TableCell>
                            <TableCell>
                                {/* <Typography color='yellow'>{user.data().userRoles[0]}</Typography> */}
                                <BasicSelect role={user.data().userRoles[0]} documentID={user.id}/>
                            </TableCell>
                            <TableCell>
                                <Typography color='yellow'>{date.toDateString()}</Typography>
                            </TableCell>
                            <TableCell>
                                <DeleteForeverSharpIcon color='default' size='large' sx={{ "&:hover":{color:'#F00', backgroundColor:'#555', cursor:'pointer'}}}  onClick={() => {setSelectedValue(user); handleClickOpen(user.id)}}/>
                            </TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer>  : <Typography>You do not have the right privalages to view this page</Typography>}
        {selectedValue ? <ConfirmDeleteUser
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            /> : console.log(selectedValue)}
    </Box>
  )
}

function BasicSelect(props) {
    const [role, setRole] = React.useState('');
  
    const handleChange = (e) => {
        firestore.collection('users').doc(props.documentID).update({userRoles: [`${e.target.value}`]})
        console.log(e.target.value)
      setRole(e.target.value);
    };

    useEffect(() => {
        setRole(props.role)
    }, [])
  
    return (
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="select-label">Role</InputLabel>
          <Select
            labelId="simple-select-label"
            id="simple-select"
            value={role}
            label="Age"
            onChange={handleChange}
            size='small'
            sx={{color:'yellow'}}
          >
            <MenuItem value={'superAdmin'}>Super Admin</MenuItem>
            <MenuItem value={'admin'}>Admin</MenuItem>
            <MenuItem value={'student'}>Student</MenuItem>
            <MenuItem value={'stakeHolder'}>StakeHolder</MenuItem>
            <MenuItem value={'user'}>User</MenuItem>
          </Select>
        </FormControl>
      </Box>
    );
  }

{/* <TableContainer component={Paper} sx={{width:'100%'}}>
            <Table sx={{ minWidth: 650, backgroundColor:'dodgerblue'}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><Typography color='white' fontWeight='bold'>Name</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'>Email</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'>User Role</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'>Date Created</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'>Delete</Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user, index) => {
                        const date = new Date(user.data().createdDate.seconds * 1000)
                        return(
                        <TableRow key={index}>
                            <TableCell>
                                <Typography color='yellow'>{user.data().displayName ? user.data().displayName : 'NO NAME WAS ENTERED'}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color='yellow'>{user.data().email}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color='yellow'>{user.data().userRoles[0]}</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography color='yellow'>{date.toDateString()}</Typography>
                            </TableCell>
                            <TableCell>
                                <Button>
                                    <DeleteForeverSharpIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer> */}

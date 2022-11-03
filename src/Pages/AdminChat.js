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
import { styled } from '@mui/material/styles';
import AddResourceModal from '../Components/AddResourceModal';


const mapUserState = ({user}) => ({
    currentUser: user.currentUser
})

const mapUserDataState = ({user}) => ({
    userProfileData: user.userProfileData
})

export default function AdminChat() {

    const { currentUser } = useSelector(mapUserState)
    const { userProfileData } = useSelector(mapUserDataState)
    const [users, setUsers] = useState([])
    const [userDeleteOpen, setUserDeleteOpen] = React.useState(false);
    const [AddResourceModalOpen, setAddResourceModalOpen] = useState(false)
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

    const handleUserDeleteClickOpen = id => {
        // if(id === selectedValue2){
            setUserDeleteOpen(true);
            console.log(`Deleting User ${id}`)
        // }
      };
    
      const handleAddResourceModalClickOpen = () => {
        setAddResourceModalOpen(true)
      }
    
      const handleUserDeleteClose = value => {
        setUserDeleteOpen(false);
        setSelectedValue(value);
      };

      const handleAddResourceModalClose = () => {
        setAddResourceModalOpen(false)
      }

      const BootstrapButton = styled(Button)({
        backgroundColor: '#000',
        marginLeft: 40
      })
    
    

  return (
    // <div style={{paddingTop:50}}>{userProfileData.userRoles[0] === 'user' ? 'YOU ARE NOT AN ADMIN' : 'WELCOME ADMIN'}</div>
    <Box sx={{pt: 10, backgroundColor:'dodgerblue', height:'100vh'}}>
        { userProfileData && userProfileData.userRoles[0] === 'admin' ? <><BootstrapButton variant='contained' onClick={handleAddResourceModalClickOpen}>
            Add Resource
        </BootstrapButton><TableContainer component={Paper} sx={{width:'100%'}}>
            <Table sx={{ minWidth: 650, backgroundColor:'dodgerblue'}} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell><Typography color='white' fontWeight='bold'>Name</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'>Email</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'></Typography></TableCell>
                        {/* <TableCell><Typography color='white' fontWeight='bold'>Date Created</Typography></TableCell>
                        <TableCell><Typography color='white' fontWeight='bold'>Delete</Typography></TableCell> */}
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
                                <BootstrapButton>Open Chat</BootstrapButton>
                                {/* <Typography color='yellow'>{user.data().userRoles[0]}</Typography> */}
                                {/* <BasicSelect role={user.data().userRoles[0]} documentID={user.id}/> */}
                            </TableCell>
                            {/* <TableCell>
                                <Typography color='yellow'>{date.toDateString()}</Typography>
                            </TableCell>
                            <TableCell>
                                <DeleteForeverSharpIcon color='default' size='large' sx={{ "&:hover":{color:'#F00', backgroundColor:'#555', cursor:'pointer'}}}  onClick={() => {setSelectedValue(user); handleUserDeleteClickOpen(user.id)}}/>
                            </TableCell> */}
                        </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer></>  : <Typography>You do not have the right privalages to view this page</Typography>}
        {selectedValue ? <ConfirmDeleteUser
                selectedValue={selectedValue}
                open={userDeleteOpen}
                onClose={handleUserDeleteClose}
            /> : console.log(selectedValue)}
        <AddResourceModal 
            open={AddResourceModalOpen}
            onClose={handleAddResourceModalClose}
        />
    </Box>
  )
}

// function BasicSelect(props) {
//     const [role, setRole] = React.useState('');
  
//     const handleChange = (e) => {
//         firestore.collection('users').doc(props.documentID).update({userRoles: [`${e.target.value}`]})
//         console.log(e.target.value)
//       setRole(e.target.value);
//     };

//     useEffect(() => {
//         setRole(props.role)
//     }, [])
  
//     return (
//       <Box sx={{ minWidth: 120 }}>
//         <FormControl fullWidth>
//           <InputLabel id="select-label">Role</InputLabel>
//           <Select
//             labelId="simple-select-label"
//             id="simple-select"
//             value={role}
//             label="Age"
//             onChange={handleChange}
//             size='small'
//             sx={{color:'yellow'}}
//           >
//             <MenuItem value={'superAdmin'}>Super Admin</MenuItem>
//             <MenuItem value={'admin'}>Admin</MenuItem>
//             <MenuItem value={'student'}>Student</MenuItem>
//             <MenuItem value={'stakeHolder'}>StakeHolder</MenuItem>
//             <MenuItem value={'user'}>User</MenuItem>
//           </Select>
//         </FormControl>
//       </Box>
//     );
//   }
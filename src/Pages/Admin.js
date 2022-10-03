import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Paper, Typography, } from '@mui/material';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';


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
    const db = getFirestore()

    const fetchAllUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        // querySnapshot.docs.forEach((doc) => { 
        //     console.log(doc.data().displayName, " => ", doc.data());
        // })
        setUsers(querySnapshot.docs)
    };

    // 
    //     return querySnapshot.docs
    //     
    //     //   doc.data() is never undefined for query doc snapshots
    //       

    
    // console.log(fetchAllUsers())

    useEffect(() => {
        fetchAllUsers()
    }, [])

    // {
    //     "userRoles": [
    //         "user"
    //     ],
    //     "email": "tester@test.com",
    //     "createdDate": {
    //         "seconds": 1664129856,
    //         "nanoseconds": 305000000
    //     },
    //     "displayName": "Tester"
    // }
    
    

  return (
    // <div style={{paddingTop:50}}>{userProfileData.userRoles[0] === 'user' ? 'YOU ARE NOT AN ADMIN' : 'WELCOME ADMIN'}</div>
    <Box sx={{pt: 10, backgroundColor:'dodgerblue', height:'100vh'}}>
        {userProfileData.userRoles[0] === 'admin' ? <TableContainer component={Paper} sx={{width:'100%'}}>
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
        </TableContainer>  : <Typography>You do not have the right privalages to view this page</Typography>}
    </Box>
  )
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

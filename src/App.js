import React, { useState, useEffect, useRef, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate} from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import Login from './Pages/Login';
import Home from './Pages/Home';
import CreateAccount from './Pages/CreateAccount';
import { auth, getSnapshotFromUserAuth } from './Firebase/utils';
import { useDispatch, useSelector } from 'react-redux';
import { emailSignIn, setUserProfileData } from './Redux/User/user.actions';
import UserAccount from './Pages/UserAccount';
import { SuperChat } from './Pages/SuperChat';
import ResetPassword from './Pages/ResetPassword'
import Admin from './Pages/Admin';
import Resources from './Pages/Resources';
import { PrivateChat } from './Pages/PrivateChat';
import AdminChat from './Pages/AdminChat'
import WithUserData from './Pages/PrivateChat'
import Partnerships from './Pages/Partnerships';


const mapUserState = ({ user }) => ({
    currentUser: user.currentUser
})

const mapUserDataState = ({user}) => ({
    userProfileData: user.userProfileData
})

export const UserContext = createContext()

 const App = () => {

    // const [userProfileData, setUserProfileData] = useState(null)
    // const [currentUser, setCurrentUser] = useState(null)
    const historyRef = useRef(null)
    const purposeRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const getInvolvedRef = useRef(null)
    const [user, setUser] = useState()
    const { currentUser } = useSelector(mapUserState)
    const { userProfileData } = useSelector(mapUserDataState)
    const dispatch = useDispatch()


    useEffect( () => {

        const unsubscribe = auth.onAuthStateChanged( user => {
            console.log('App Component Mounting...')
            dispatch(emailSignIn(user))
            const userData = async () => { const data = await getSnapshotFromUserAuth(user); dispatch(setUserProfileData(data.data())) }
            userData()
            setUser(currentUser)
            // console.log(userProfileData.data())
            // setCurrentUser(user)
            
        })

        return unsubscribe
    }, [currentUser])

    const handleHistoryScroll = (reference) => {

       try{
        window.scrollTo({
            top: reference.current.offsetTop,
            behavior: 'smooth'
        })
       }catch(err){

       }
    }   

  return (
    <div>
        <Router>
            <Header 
            scrollController={handleHistoryScroll}
            historyRef={historyRef}
            purposeRef={purposeRef}
            aboutRef={aboutRef}
            contactRef={contactRef}
            getInvolvedRef={getInvolvedRef}
            />       
            <Routes>
                <Route exact path='/ZOE-INC' element={<Home historyRef={historyRef} purposeRef={purposeRef} aboutRef={aboutRef} contactRef={contactRef} getInvolvedRef={getInvolvedRef}/>}/>
                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/register' element={<CreateAccount />}/>
                <Route exact path='/my-account' element={<UserAccount />}/>
                <Route exact path='/superchat' element={<UserContext.Provider value={user}><SuperChat user={user}/></UserContext.Provider>}/>
                <Route exact path='/reset-password' element={<ResetPassword />}/>
                <Route exact path='/admin' element={<Admin />} >
                    <Route exact path='/admin/private-chat' element={/*userProfileData.userRoles[0] === 'admin' ? <PrivateChat /> : */<PrivateChat />} /> 
                </Route>
                <Route exact path='resources' element={<Resources />} />
                <Route exact path='partnerships' element={<Partnerships />} />
                <Route exact path='/private-chat' element={/*userProfileData.userRoles[0] === 'admin' ? <PrivateChat /> : */<PrivateChat />} /> 
            </Routes>
        </Router>
    </div>
  );
}

export default App;

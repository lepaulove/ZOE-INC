import React, { useState, useEffect, useRef, useMemo  } from 'react';
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


const mapUserState = ({ user }) => ({
    currentUser: user.currentUser
})

 const App = () => {

    // const [userProfileData, setUserProfileData] = useState(null)
    // const [currentUser, setCurrentUser] = useState(null)
    const historyRef = useRef(null)
    const purposeRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const getInvolvedRef = useRef(null)
    const dispatch = useDispatch()


    useEffect( () => {

        const unsubscribe = auth.onAuthStateChanged( user => {
            console.log('App Component Mounting...')
            dispatch(emailSignIn(user))
            const userData = async () => { const data = await getSnapshotFromUserAuth(user); dispatch(setUserProfileData(data.data())) }
            userData()
            // console.log(userProfileData.data())
            // setCurrentUser(user)
            
        })

        return unsubscribe
    }, [])

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
                <Route exact path='/ZOE-INC-AND-ASSOCIATES-PROJECT' element={<Home historyRef={historyRef} purposeRef={purposeRef} aboutRef={aboutRef} contactRef={contactRef} getInvolvedRef={getInvolvedRef}/>}/>
                <Route exact path='/login' element={<Login />}/>
                <Route exact path='/register' element={<CreateAccount />}/>
                <Route exact path='/my-account' element={<UserAccount />}/>
                <Route exact path='/superchat' element={<SuperChat />}/>
                <Route exact path='/reset-password' element={<ResetPassword />}/>
                <Route exact path='/admin' element={<Admin />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

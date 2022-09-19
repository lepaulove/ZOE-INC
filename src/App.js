import React, { useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Redirect } from 'react-router-dom'
import './App.css';
import Header from './Components/Header';
import History from './Sections/History'
import Purpose from './Sections/Purpose'
import About from './Sections/About'
import Contact from './Sections/Contact'
import GetInvolved from './Sections/Get-Involved';
import Login from './Pages/Login';
import Home from './Pages/Home';


function App() {

    const historyRef = useRef(null)
    const purposeRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const getInvolvedRef = useRef(null)

    const handleHistoryScroll = (reference) => {

       window.scrollTo({
           top: reference.current.offsetTop,
           behavior: 'smooth'
       })
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
                <Route exact path='/' element={<Home historyRef={historyRef} purposeRef={purposeRef} aboutRef={aboutRef} contactRef={contactRef} getInvolvedRef={getInvolvedRef}/>}/>
                <Route exact path='/login' element={<Login />}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;

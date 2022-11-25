import React from 'react'
import History from '../Sections/History'
import Purpose from '../Sections/Purpose'
import About from '../Sections/About'
import Contact from '../Sections/Contact'
import GetInvolved from '../Sections/Get-Involved'

const Home = (props) => {

    const { historyRef, 
    purposeRef, 
    aboutRef, 
    contactRef, 
    getInvolvedRef} = props

    return(
        <div>
            <div ref={historyRef}>
                <History />
            </div>
            <div ref={purposeRef}>
                <Purpose />
            </div>
            <div ref={getInvolvedRef}>
                <GetInvolved />
            </div>
            <div ref={contactRef}>
                <Contact />
            </div>
            {/* <div ref={aboutRef}>
                <About />
            </div> */}
        </div>
    )
}

export default Home
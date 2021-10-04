import React from 'react'
import { NavLink } from 'react-router-dom'
import './Link.css'



const Linkid = () => {
    return (
        <div className='container'>
            <nav>
               <h1> <NavLink to='/home'>HOME</NavLink></h1>
               <h1> <NavLink to='/service'>SERVICE</NavLink></h1>
                <h1><NavLink to='/about'>ABOUT US</NavLink></h1>
                <h1><NavLink to='/review'>REVIEW</NavLink></h1>
                <h1><NavLink to='/contact'>CONTACT</NavLink></h1>
            </nav>
        </div>
    )
}

export default Linkid

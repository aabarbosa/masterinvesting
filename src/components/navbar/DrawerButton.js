import React from 'react'
import '../assets/css/components/navigation/navdrawer.css'

const NavigationDrawer = props => {
    return <button className="nav-drawer-btn" onClick>
                <div className="nav-drawer-btn__line"></div>
                <div className="nav-drawer-btn__line"></div>
                <div className="nav-drawer-btn__line"></div>
            </button>

}

export default NavigationDrawer


//clicked => console.log('I\'ve been clicked')

import React from 'react'
import ReactDOM from 'react-dom'
import '../assets/css/components/navigation/navdrawer.css'
import NavbarMenuItems from './NavbarMenuItems'

export const handling = props =>  ReactDOM.render (<div><NavbarMenuItems/></div>)
    

const NavigationDrawer = props => {
    return <div>
            <handling/> 
             <button className="nav-drawer-btn" 
                    >
                <div className="nav-drawer-btn__line"></div>
                <div className="nav-drawer-btn__line"></div>
                <div className="nav-drawer-btn__line"></div>
            </button>
            </div>
}

export default NavigationDrawer


//TODO: This is a button. Add here the next the toggle window.
//Make this action clear.
//clicked => console.log('I\'ve been clicked')

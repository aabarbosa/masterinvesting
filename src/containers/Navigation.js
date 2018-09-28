import React from 'react'
import NavigationDrawer from '../components/NavigationDrawer'
import '../assets/css/components/navigation/navigation.css'

const Navigation = props => (
    <div className="navigation-container">
    <nav className="navbar" >
        <div className="nav-drawer"> 
            <NavigationDrawer/> 
        </div>
        <div className="navbar-logo">
            <a href="/">Masterinvesting</a>
        </div>
        <div className="navbar-menu-items">
            <ul>	
                <li className="navbar-menu"><a href="/">Home</a></li>
                <li className="navbar-menu"><a href="/">News</a></li>
                <li className="navbar-menu"><a href="/">Screener</a></li>
            </ul>
        </div>
    </nav>
    </div>
)

export default Navigation

//const MenuItem = props =>  <li class="menu_item">this.props.value</li>
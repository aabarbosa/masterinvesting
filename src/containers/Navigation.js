import React from 'react'
import DrawerButton from '../components/DrawerButton'
import NavbarMenuItems from '../components/NavbarMenuItems'
import '../assets/css/components/navigation/navigation.css'

const Navigation = props => (
    /*
	constructor (props){
		super(props)
		this.state = {active:false}
	}
	click() {
		this.setState({active: true})
	}*/

    <div className="navigation-container">
    <nav className="navbar" >
        <div className="nav-drawer"> 
            <DrawerButton onClick={props.click}/> 
        </div>
        <div className="navbar-logo">
            <a href="/">Masterinvesting</a>
        </div>
        <NavbarMenuItems/>
    </nav>
    </div>
)

export default Navigation


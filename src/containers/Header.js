import React, { Component } from 'react'
/*navigation*/
import Hamburger from '../components/navbar/Hamburger'
import NavMenu from '../components/navbar/NavMenu'
import SideMenu from '../components/navbar/SideMenu'

/*test*/
import Search from '../components/Search/Search'

/* css */
import '../components/assets/css/header.css'
import '../components/assets/css/backdrop.css'
/* GUI components */
import sideMenuClose from '../components/navbar/backdrop'

/*Header deals with navigation and uses <routes> for navs and menus*/
class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            headerTitle: this.props.logoTitle,
            sideMenuOpen: false,
            data: []
        }
    }    

    hamburgerClick = () => {this.setState((prevState) => {
            return {sideMenuOpen: !prevState.sideMenuOpen}})}
    hamburgerCancel = () => {this.setState({sideMenuOpen: false})}

    render () {
        let backdrop;
        if (this.state.sideMenuOpen) {
            backdrop = <sideMenuClose /*Give it a style here*/ click={this.hamburgerCancel}/>}

        return  <div className="header-container-scope">
                <nav className="navbar" >

        
                    <div className='nav-drawer-scope'> 
                        <Hamburger click={this.hamburgerClick}/>
                        <SideMenu show={this.state.sideMenuOpen}/> 
                            {backdrop}
                    </div> 
                    <NavMenu user = {this.props.user} picture = {this.state.picture}/>
                    {/*THE LOGO*/}
                    <div className="navbar-logo">
                        <a href="/">{this.state.headerTitle}</a> {/*TODO: use routes*/}
                    </div>

                    <form className="form-inline mt-2 mt-md-0 ml-5">
                        <Search />
                    </form>
                </nav>
                </div>
    }
}

export default Header


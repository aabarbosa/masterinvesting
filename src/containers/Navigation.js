import React, { Component } from 'react'
import DrawerButton from '../components/navbar/DrawerButton'
import NavbarMainMenu from '../components/navbar/NavbarMainMenu'
import '../components/assets/css/components/navigation/navigation.css'

const Greeting = ({ greeting, isShow }) =>
  isShow ? <h1>{greeting}</h1> : null;


class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            click: true,
            sideDrawerOpen: false,
            isShow: true
        }
    }

    toggleShow = () => {
      this.setState(state => ({ isShow: !state.isShow }));
    };

	
	openMenu = () => {this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		})
	}

    render () {
        const greeting = 'hello world'
        return  <div className="navigation-container">
                <nav className="navbar" >
                    <div className='nav-drawer'> 
                        <DrawerButton onClick={
                            clicked => console.log('I\'ve been clicked')}/>
                        <button onClick={this.toggleShow} type="button">Toggle Show</button>
                    </div>
                    <div className="navbar-logo">
                        <a href="/">TickerFinder</a>
                    </div>
                    <NavbarMainMenu className={this.state.isShow?'navbar-menu-items open': 'navbar-menu-items'}/>
                </nav>

                <Greeting greeting={greeting} isShow={this.state.isShow} />
                

                </div>
    }
}

export default Navigation


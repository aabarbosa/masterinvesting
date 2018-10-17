import React, { Component } from 'react'
import {connect} from 'react-redux'
import Navigation from './Navigation'
import { User } from '../components/User'
import { Main } from '../components/Main'
import { setName } from '../actions/userActions'
import '../components/assets/css/components/application.css'
import Foo from '../foo/fetch'

class Application extends Component {
	state = {
		sideDrawerOpen: false
	}
	
	openMenu = () => {this.setState((prevState) => {
			return {sideDrawerOpen: !prevState.sideDrawerOpen};
		})
	}

	render() {
		return	<html>
				<header className="application">
					<Navigation title = "TickerFinder"/>
				</header>
				<body>
					Body
					<main className="application-main">
						<p>Main</p>
						<div className="container">
							<Foo/>
							<Main changeUsername={() => this.props.setName('data')}/>
							<User username={this.props.user.name}/>
						</div>
					</main>

					<small>@2018 by aabarbosa.</small>
				</body>
				</html>
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user,
		math: state.math
	}
  }
  
const mapDispatchToProps = (dispatch) => {
	return {
		setName: (name) => {
			dispatch(setName(name))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Application)
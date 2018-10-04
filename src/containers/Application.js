
import React, { Component } from 'react'
import {connect} from 'react-redux'
import Navigation from './Navigation'
import { User } from '../components/User'
import { Main } from '../components/Main'
import { setName } from '../actions/userActions'

import '../assets/css/components/application.css'

const apiURL = 'https://api.iextrading.com/1.0'

const getData = (stock) => {
  return axios.get(`${apiURL}/stock/${stock}/quote?displayPercent=true`)
    .then( response => response.data )
    .catch( err => console.log(err) )
}


class Application extends Component {
	render() {// Nav here
		return	<header className="application">
					<Navigation/>
					
					<main className="application-main">
						<p>Main</p>
						<div className="container">
							<Main changeUsername={() => this.props.setName(getData)}/>
							<User username={this.props.user.name}/>
						</div>
						<small>Copyright 2018 by aabarbosa.</small>
					</main>
				</header>
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
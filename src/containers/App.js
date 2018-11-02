import React, { Component } from 'react'
import {connect} from 'react-redux'
import Header from './Header'
import { User } from '../components/User'
import { setName } from '../actions/userActions'
import '../components/assets/default/formatter.css'
//import Foo from '../data/fetch'

class App extends Component {
	render() {
		return	<div className="app"> {/*apply the formatter*/}
					<Header logoTitle = "TickerFinder"/>
					<main className="application-main">
						
						<User username={this.props.user.name} changeUsername={() => this.props.setName('data')}/>
					</main>

					<small>@2018 by aabarbosa.</small>
s				</div>
	}
}

const mapStateToProps = (state) => {
	return {user: state.user}}
  
const mapDispatchToProps = (dispatch) => {
	return {setName: (name) => {dispatch(setName(name))}}}

export default connect(mapStateToProps, mapDispatchToProps)(App)
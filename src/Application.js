
import React, { Component } from 'react'
import Navigation from './containers/Navigation'
import './assets/css/components/application.css'

export default class Application extends Component {
	render() {// Nav here
		return	<header className="application">
					<Navigation />
					
					<main className="application-main">
						<p>Main</p>
						<small>Copyright 2018 by aabarbosa.</small>
					</main>
				</header>
	}
}
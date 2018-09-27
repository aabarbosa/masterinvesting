
import React, { Component } from 'react'
import NavigationBar from './components/NavigationBar'
import './assets/css/application.css'

export default class Application extends Component {
	render() {// Nav here
		return	<div className="application"> 
					<header className="application_header">						
						<NavigationBar />

					</header>
					
					<main className="application_main">
						<p>Main</p>
						<small>Copyright 2018 by aabarbosa.</small>
					</main>
				</div>
	}
}
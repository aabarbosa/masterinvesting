
import React, { Component } from 'react'
import NavigationBar from './components/NavigationBar'

export default class Application extends Component {
	render() {// Nav here
		return	<div className="application"> 
					<header className="header">						
						<NavigationBar />

					</header>
					
					<main>
						{'Main'}
					</main>
				</div>
	}
}

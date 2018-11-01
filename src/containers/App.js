import React, { Component } from 'react'
import Header from './Header'
import '../components/assets/default/formatter.css'
import './App.css'
import router from '../routes/Routes'
import Dashboard from '../components/Dashboard/Dashboard'
import { withRouter } from 'react-router-dom'


class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			picture: ''
		}
	}
		
	render() {
		return	(
				<div className="app"> {/*apply the formatter*/}
					<Header logoTitle = "TickerFinder"/>
					<Dashboard/> 	{/*pathname removed*/}
                        { router }
                    
				</div>
			)
	}
}

export default withRouter(App)

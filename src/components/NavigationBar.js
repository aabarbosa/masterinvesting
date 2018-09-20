import React, {Component} from 'react'
import './css/toolbar.css'

const navigationBar = props => (
    <nav className="navbar" >
       <ul>
            <div className="logo">
				<a href="/">Masterinvesting</a>
			</div>
					
           <li><a href="/">Home</a></li>
           <li><a href="/">News</a></li>
           <li><a href="/">Screener</a></li>
       </ul>
    </nav>
)

export default navigationBar

//const MenuItem = props =>  <li class="menu_item">this.props.value</li>
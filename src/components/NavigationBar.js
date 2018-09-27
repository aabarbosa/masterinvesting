import React, {Component} from 'react'
import '../assets/css/toolbar.css'

const navigationBar = props => (
    <nav className="navbar" >
        <div></div>
        <div className="navbar_logo">
                <a href="/">Masterinvesting</a>
        </div>
        <div>    
            <ul className="navbar_items">	
                <li><a class="a_home" href="/">Home</a></li>
                <li><a class="a_news"  href="/">News</a></li>
                <li><a class="a_screener" href="/">Screener</a></li>
            </ul>
        </div>
    </nav>
)

export default navigationBar

//const MenuItem = props =>  <li class="menu_item">this.props.value</li>
import React from 'react'
import { Link, Router,Route } from 'react-router-dom'

const NavMenu =() => {
    return (
            <div className="navbar-menu-items">
                <ul>
                    <li className="navbar-menu" >
                        <Link to="/screener">Screener</Link>
                    </li>
                    <li className="navbar-menu">
                        <Link to="/watchlist">News</Link>
                    </li>    
                </ul>  
            </div>
    )
}


export default NavMenu
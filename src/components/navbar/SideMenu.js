import React from 'react'
import '../assets/css/side-menu.css'
import {render} from 'react-dom'

const SideMenu = ({show}) => {
  let drawerClasses = 'side-menu open'
  if (show) {
    drawerClasses = 'side-menu'
  }
  return (
    <nav className={drawerClasses}>
                 <ul>
                      <li className="navbar-menu"><a href="/">Nav</a></li>
                      <li className="navbar-menu"><a href="/">Side</a></li>
                  </ul>
      </nav>
  )
}

export default SideMenu
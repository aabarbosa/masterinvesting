import React from 'react'

import NavbarMainMenu from './NavbarMainMenu'

const SideMenu = props => {

  return (
    <nav className={props.show?'drawer-side-menu open': 'drawer-side-menu'}>
      <NavbarMainMenu/>
    </nav>
  )
}

export default SideMenu
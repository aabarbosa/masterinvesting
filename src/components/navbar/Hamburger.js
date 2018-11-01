import React from 'react'
import '../assets/css/hamburger.css'

const Hamburger = ({click}) => {
    return <button className="drawer-btn" type="button" onClick={click}>
                <div className="drawer-btn__line"></div>
                <div className="drawer-btn__line"></div>
                <div className="drawer-btn__line"></div>
            </button>

}

export default Hamburger

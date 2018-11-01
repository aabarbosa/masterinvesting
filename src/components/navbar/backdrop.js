import React from 'react'

import '../assets/css/backdrop.css'

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
)

export default backdrop
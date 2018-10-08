import React from 'react'

import '../assets/css/components/navigation/backdrop.css'

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
)

export default backdrop
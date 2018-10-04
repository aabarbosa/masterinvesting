import React from 'react'

export const Main = (props) => {
    return (
        <div>
            <h1>The Main Page</h1>
            <button onClick={() => props.changeUsername()}>Change the Username</button>
        </div>
    )
}
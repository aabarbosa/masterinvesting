import React from 'react'

export const User = (props) => {
    return (
        <div>
            <h1>The Main Page</h1>
            <button onClick={() => props.changeUsername()}>Change the Username</button>
            <h1>The User Page</h1>
            <p>User Name: {props.username}</p>
        </div>
    )
}

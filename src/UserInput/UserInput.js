import React from 'react'
import './UserInput.css'

const UserInput = (props) => <input className="UserInput" type="text" onChange={props.changed} value={props.initialValue} />

export default UserInput
import React from 'react'
import './UserOutput.css'

const UserOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Hi guys, my name is {props.username}. I'm learning React.</p>
      <p>{props.children}</p>
    </div>)
}

export default UserOutput
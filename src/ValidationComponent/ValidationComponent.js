import React from 'react'
import './ValidationComponent.css'

const ValidationComponent = (props) => {
  let message = 'Text too short'
  if (props.length >= 5) {
    message = 'Text long enough'
  } else {
    message = 'Text too short'
  }
  return (
    <p>{message}</p>
  )
}

export default ValidationComponent
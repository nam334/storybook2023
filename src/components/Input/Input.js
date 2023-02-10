import React from 'react'
import './Input.css'
const Input = (props) => {
    const {variant='sm', children, ...rest} = props
  return (
    <input className={ `input ${variant}`}  />
  )
}

export default Input
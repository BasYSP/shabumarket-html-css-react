import React from 'react'

const Order = (props) => {
    const {key, count} = props
  return (
    <div><h1>{key} {count}</h1></div>
  )
}

export default Order
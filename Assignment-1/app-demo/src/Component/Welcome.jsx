import React from 'react'

export default function Welcome(props) {
  return (
    <div>
      <p>Hey {props.name} sir your age is - {props.age} and you are from {props.city}</p>
    </div>
  )
}

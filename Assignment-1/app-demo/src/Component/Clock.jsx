import React from 'react'

export default function Date(props) {
  return (
    <div>
      <p>Time is  - {props.date.toLocaleTimeString()}.</p>
    </div>
  )
}

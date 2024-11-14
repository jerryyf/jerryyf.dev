'use client'
 
import { useState } from 'react'
 
export default function Counter(props) {
  const counterStyle = {
    color: props.color,
    fontSize: props.fontSize + 'px'
  }
  const [count, setCount] = useState(0)
 
  return (
    <div style={counterStyle}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
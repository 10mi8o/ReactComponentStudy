import React, { useState, useEffect } from 'react'

export default function Timer() {
  const [count, setCount] = useState(0);
  const time = () => {
    setCount(prevCount => prevCount + 1)
  }

  useEffect(()=> {
    const interval = setInterval(time, 1000)
    return() => {
      clearInterval(interval)
      console.log("cleared")
    }
  },[])

  return (
    <div>
      <div>{count}</div>
    </div>
  )
}

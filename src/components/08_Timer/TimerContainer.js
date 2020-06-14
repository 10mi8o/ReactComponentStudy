import React, { useState } from 'react'
import Timer from "./Timer"

export default function TimerContainer() {

  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={()=>{setDisplay(!display)}}>Switch Timer</button>
      {display && <Timer />}
    </div>
  )
}

import React, {useContext} from 'react'
import AppContext from "../../contexts/AppContext";

const C = () => {
  const {dispatchProvided} = useContext(AppContext);
  return (
    <div>
      <h3>C</h3>
      <button onClick={()=>{dispatchProvided('add_1')}}>add_1</button>
      <button onClick={()=>{dispatchProvided('multiple_3')}}>multiple_3</button>
      <button onClick={()=>{dispatchProvided('reset')}}>reset</button>
    </div>
  )
}

export default C

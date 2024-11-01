import React from 'react';
import {useSelector} from 'react-redux'

function Count() {
    const counter=useSelector(state=>state.counter)
  return (
    <div>
        <h2>{counter}</h2>
    </div>
  )
}

export default Count
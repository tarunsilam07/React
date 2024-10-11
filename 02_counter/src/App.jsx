import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [Counter,setCounter]=useState(7) // let 


  const addValue=()=>{
    if(Counter<20)
     setCounter(Counter+1);
  };
  
  const removeValue=()=>{
    if(Counter>0)
    setCounter(Counter-1);
  }

  return (
    <>
      <h1>Basic Counter App</h1>
      <h2>Counter value: {Counter}</h2>
      <button
      onClick={addValue}
      >Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App

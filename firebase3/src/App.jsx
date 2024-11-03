import './App.css'
import { useFireBase } from './context/FireBase'
import { useState } from 'react';
function App() {
  const fireBase=useFireBase();
  console.log(fireBase)
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  return (
    <>
      <h1>Fire Base</h1>
      <input   onChange={e=>setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder='Enter Email' />
      <input onChange={e=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder='Enter Password' />
      <button onClick={()=>
        {fireBase.signupUserWithEmailAndPassword(email,password)
        fireBase.putData("users/"+"tarunsilam",{email,password})
        }}>Signup</button>
    </>
  )
}

export default App

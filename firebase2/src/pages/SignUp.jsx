import React,{useState} from "react";
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'
import app from "../firebase";

const auth=getAuth(app);

const SignUpPage=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password);
        alert('success')
    }
    return (
        <>
        <div className="signup-page">
            <label >Email  </label>
            <input onChange={e=>setEmail(e.target.value)} value={email} type="email" name="email" id="email" placeholder="Enter Your Email"/>
            <br />
            <br />
            <label>Password  </label>
            <input onChange={e=>setPassword(e.target.value)} value={password} type="password" name="password" id="password" placeholder="Enter Your Password"/>
            <br />
            <br />
            <button onClick={createUser}>Create User</button>
        </div>
        </>
    )
}

export default SignUpPage;
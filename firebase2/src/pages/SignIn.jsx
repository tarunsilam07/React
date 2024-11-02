import React,{useState} from "react";
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import app from "../firebase";

const auth=getAuth(app);

const SignInPage=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const signInUser=()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then((value)=>console.log('SignIn Successfull',value))
        .catch((err)=>console.log(err));
    }

    return(
        <>
        <h1>SignIn Page</h1>
        <label>Email  </label>
        <input onChange={e=>setEmail(e.target.value)}value={email} type="email" name="email" id="email1" placeholder="Enter Your Email" />
        <br />
        <br />
        <label>Password  </label>
        <input onChange={e=>setPassword(e.target.value)} value={password} type="password" name="password" id="password1" placeholder="Enter Your Password" />
        <br />
        <br />
        <button onClick={signInUser}>SignIn</button>
        </>
    )
};

export default SignInPage;
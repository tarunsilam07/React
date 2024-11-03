import React,{useState} from "react";
import {getAuth,createUserWithEmailAndPassword,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
import app from "../firebase";

const auth=getAuth(app);
const googleProvider=new GoogleAuthProvider();

const SignUpPage=()=>{

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const createUser=()=>{
        createUserWithEmailAndPassword(auth,email,password);
        alert('success')
    }

    const signUpWithGoogle=()=>{
        signInWithPopup(auth,googleProvider);
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
            <br />
            <br />
            <button onClick={signUpWithGoogle}>SignIn with Google</button>
        </div>
        </>
    )
}

export default SignUpPage;
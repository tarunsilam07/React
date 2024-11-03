import './App.css'
import app from './firebase'
import SignUpPage from './pages/SignUp';
import {getAuth,onAuthStateChanged,signOut} from 'firebase/auth'
import SignInPage from './pages/SignIn';
import { useEffect,useState } from 'react';


const auth=getAuth(app);

function App() {

  const [user,setUser]=useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
      setUser(user);
      console.log(user)
      }
      else{
        console.log('You are logged out')
        setUser(null);
      }
    })
  },[])

  if(user==null){
    return(
      <>
      <h1>FireBase Auth</h1>
      <SignUpPage/>
      <SignInPage/>
      </>
    )
  }

  return (
    <>
    <h1>Hello {(user.displayName)?user.displayName:user.email}</h1>
    <button onClick={()=>signOut(auth)}>Logout</button>
    </>
  )
}

export default App

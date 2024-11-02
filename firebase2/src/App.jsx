import './App.css'
import app from './firebase'
import SignUpPage from './pages/SignUp';
import {getAuth,createUserWithEmailAndPassword} from 'firebase/auth'

const auth=getAuth(app);

function App() {

  const signUpUser=()=>{
    createUserWithEmailAndPassword(auth,
      'tarun79767@gmail.com',
      'Tarun77@@'
    ).then((value)=>console.log(value));
  }

  return (
    <>
    <h1>FireBase Auth</h1>
    <SignUpPage/>
    </>
  )
}

export default App

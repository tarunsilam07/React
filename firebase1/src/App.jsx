import './App.css'
import {getDatabase,ref,set} from 'firebase/database'
import app from './firebase'

const db=getDatabase(app);

function App() {

  const putData=()=>{
    set(ref(db,'users/tarun'),{
      id:1,
      name:"tarun",
      age:20
    })
  }

  return (
    <>
    <h1>FireBase Setup</h1>
    <button onClick={putData}>Put data</button>
    </>
  )
}

export default App

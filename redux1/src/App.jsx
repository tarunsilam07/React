import { useDispatch } from 'react-redux'
import './App.css'
import Count from './components/Count'
function App() {

  const dispatch=useDispatch();

  return (
    <>
      <Count/>
      <button onClick={e=>dispatch({type:'INCREMENT'})}>Increment</button>
      <button onClick={e=>dispatch({type:'DECREMENT'})}>Decrement</button>
    </>
  )
}

export default App

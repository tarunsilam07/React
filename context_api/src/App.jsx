import { useContext } from 'react'
import './App.css'
import Counter from './components/counter'
import { CounterContext } from './context/CounterContext'

function App() {

  const counterState=useContext(CounterContext)
  console.log(counterState)
  return (
    <>
    <div className='app'>
      <h1>Context Api</h1>
      <h1>Count is {counterState.count}</h1>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </div>
    </>
  )
}

export default App

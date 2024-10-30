import './App.css'
import Item from './components/Item'
import Cart from './components/Cart'
function App() {

  return (
    <>
    <Item name="MacBook" price={100000}/>
    <Item name="Pendrive" price={1000}/>
    <Item name="Adapter" price={100}/>
    <Cart/>
    </>
  )
}

export default App

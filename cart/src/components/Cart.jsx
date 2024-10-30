import React ,{useContext}from 'react'
import { CartContext } from '../context/CartContext'

function Cart() {
    const cart=useContext(CartContext)
  return (
    <div className='cart'>
        <h1>Cart</h1>
        {
            cart && cart.items.map(item=><li>{item.name}-${item.price}</li>)
        }
        <h5>Total Bill :{cart.items.reduce((a,b)=>a+b.price,0)} $</h5>
    </div>
  )
}

export default Cart
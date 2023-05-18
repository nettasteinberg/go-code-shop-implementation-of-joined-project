import React, { useContext } from 'react'
import { MyContext } from '../../MyContext'

const CartItems = () => {
    const {itemsInCart} = useContext(MyContext)
  return (
    <div>
        {Object.keys(itemsInCart).map(id => <div>{itemsInCart[id]["name"].slice(0,10)}... total:{itemsInCart[id]["amount"] * itemsInCart[id]["price"]}</div>)}
    </div>
  )
}

export default CartItems
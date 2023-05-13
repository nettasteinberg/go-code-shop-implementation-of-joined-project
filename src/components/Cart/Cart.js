import "./Cart.css"
import React, { useContext } from "react"
import { MyContext } from "../../MyContext"
import { ProductInCart } from "../ProductInCart/ProductInCart";

export const Cart = () => {
    const {itemsInCart} = useContext(MyContext);
    return (
        <div className="cart">
            {Object.keys(itemsInCart).length > 0 && <h1>Shopping Cart</h1>}
            <div className="cartItems">
                {Object.keys(itemsInCart).map((key) => <ProductInCart product={key}/>)}
            </div>
        </div>
    )
}
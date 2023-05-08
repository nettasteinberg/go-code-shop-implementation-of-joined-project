import { useContext } from "react"
import "./Cart.css"
import { MyContext } from "../../MyContext"
import { ProductInCart } from "../ProductInCart/ProductInCart";

export const Cart = () => {
    const {itemsInCart} = useContext(MyContext);
    return (
        <div className="cart">
            {Object.keys(itemsInCart).length > 0 && <h2>Cart</h2>}
            <div className="cartItems">
                {Object.keys(itemsInCart).map((key) => <ProductInCart product={key}/>)}
            </div>
        </div>
    )
}
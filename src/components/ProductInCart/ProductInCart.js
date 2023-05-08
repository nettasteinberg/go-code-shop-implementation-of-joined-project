import { useContext } from "react"
import { MyContext } from "../../MyContext"
import "./ProductInCart.css"
import { AddSubtractProduct } from "../AddSubtractProduct/AddSubtractProduct";

export const ProductInCart = ({product}) => {
    const {itemsInCart} = useContext(MyContext);
    return (
        <div className="productInCart">
            <div>
                <p><span style={{ fontWeight: 'bold' }}>Product name:</span> {product}</p>
                <p><span style={{ fontWeight: 'bold' }}>Product price:</span> {itemsInCart[product][1]}$</p>
                <p><span style={{ fontWeight: 'bold' }}>Product amount:</span> {itemsInCart[product][0]}</p>
                <p><span style={{ fontWeight: 'bold' }}>Total price:</span> {itemsInCart[product][1] * itemsInCart[product][0]}$</p>
            </div>
            <div>
                <AddSubtractProduct title={product} price={itemsInCart[product][1]}/>
            </div>
        </div>
    )
}
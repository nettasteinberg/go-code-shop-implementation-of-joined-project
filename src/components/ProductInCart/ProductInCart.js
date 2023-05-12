import "./ProductInCart.css"
import { useContext } from "react"
import { MyContext } from "../../MyContext"
import { AddSubtractProduct } from "../AddSubtractProduct/AddSubtractProduct";

export const ProductInCart = ({product}) => {
    const {itemsInCart, setItemsInCart} = useContext(MyContext);
    
    const removeFromCart = (product) => {
        console.log(`removing product "${product}" from cart`);
        delete itemsInCart[product];
        setItemsInCart({...itemsInCart});
    }
    
    return (
        <div className="productInCart">
            <div>
                <p><span style={{ fontWeight: 'bold' }}>Product name:</span> {product}</p>
                <p><span style={{ fontWeight: 'bold' }}>Product price:</span> {itemsInCart[product][1]}$</p>
                <p><span style={{ fontWeight: 'bold' }}>Product amount:</span> {itemsInCart[product][0]}</p>
                <p><span style={{ fontWeight: 'bold' }}>Total price:</span> {itemsInCart[product][1] * itemsInCart[product][0]}$</p>
            </div>
            <div className="adjustAmountInCart">
                <AddSubtractProduct title={product} price={itemsInCart[product][1]}/>
                <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
        </div>
    )
}
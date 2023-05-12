import "./ProductInCart.css"
import { useContext } from "react"
import { MyContext } from "../../MyContext"
import { Button } from "../Button/Button";


export const ProductInCart = ({product}) => {
    const {itemsInCart, setItemsInCart} = useContext(MyContext);
    
    const removeFromCart = (product) => {
        console.log(`removing product "${product}" from cart`);
        delete itemsInCart[product];
        setItemsInCart({...itemsInCart});
    }

    const subtract = () => {
        if (itemsInCart[product][0] === 1) {
            return;
        } else {
            itemsInCart[product][0] -= 1;
        }
        setItemsInCart({...itemsInCart});
    }
    
    const add = () => {
        itemsInCart[product][0] +=  1;
        setItemsInCart({...itemsInCart});
    }
    
    return (
        <div className="productInCart">
            <div>
                <p><span style={{ fontWeight: 'bold' }}>Product name:</span> {product}</p>
                <p><span style={{ fontWeight: 'bold' }}>Product price:</span> {itemsInCart[product][1]}$</p>
                <p><span style={{ fontWeight: 'bold' }}>Product amount:</span> {itemsInCart[product][0]}</p>
                <p><span style={{ fontWeight: 'bold' }}>Total price:</span> {Number.parseFloat(itemsInCart[product][1] * itemsInCart[product][0]).toFixed(2)}$</p>
            </div>
            <div className="adjustAmountInCart">
                <div className="addToCartContainer">
                    <Button onClick={() => subtract()} text={"-"} />
                    <Button onClick={() => add()} text={"+"} />
                </div>
                <button onClick={() => removeFromCart(product)}>Remove</button>
            </div>
        </div>
    )
}
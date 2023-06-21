import React, { useContext, useEffect, useState } from 'react'
import { MyContext } from '../../MyContext';
import "./AddToCartButtons.css"
import add_to_cart_image from '../../Icons/add_to_cart.jpg';
import subtract_from_cart_image from '../../Icons/subtract_from_cart.jpg';
import remove_from_cart_image from '../../Icons/remove_from_cart.jpg';

const AddToCartButtons = ({ id, title, price, image }) => {
    const { incrementProduct, decrementProduct, addToCart, itemsInCart, setItemsInCart, isCartOpen } = useContext(MyContext);
    const [count, setCount] = useState(0);

    const removeFromCart = (id) => {
        if (!(id in itemsInCart)) {
            return;
        }
        console.log(`Removing product "${itemsInCart[id]["name"]}" from the cart`);
        delete itemsInCart[id];
        setItemsInCart({ ...itemsInCart });
        setCount(0);
    }

    useEffect(() => {
        setCount(0);
    }, [isCartOpen]);

    const addOnClick = () => { addToCart(id, title, price, image, count, setCount); setItemsInCart({ ...itemsInCart }); };
    const removeOnClick = () => { removeFromCart(id) };

    return (
        <React.Fragment>
            <div className="buttonsClassAddToCartButtons">
                <div className='changAmount'>
                    <button className={(id in itemsInCart && itemsInCart[id]["amount"] > 0) || count > 0 ? "minusInProduct size hover": "minusInProduct size"} onClick={() => decrementProduct(setCount, id in itemsInCart ? itemsInCart[id]["amount"] : 0)}>-</button>
                    <p>{count}</p>
                    <button className='plusInProduct size' onClick={() => incrementProduct(setCount)}>+</button>
                </div>
                <div className="addToCart">
                    <img
                        src={count >= 0 ? add_to_cart_image : subtract_from_cart_image}
                        alt={count >= 0 ? 'add to cart icon' : 'subtract from cart icon'}
                        height={32}
                        width={32}
                        onClick={addOnClick}
                        className='hover'
                    />
                    <button className="button add hover" onClick={addOnClick}>
                        {count >= 0 ? "Add to cart" : "Subtract from cart"}
                    </button>
                </div>
                <div className="removeFromCart">
                    <button className="button remove hover" onClick={removeOnClick}>Remove from cart</button>
                    <img
                        src={remove_from_cart_image}
                        alt='remove from cart icon'
                        height={32}
                        width={32}
                        onClick={removeOnClick}
                        className='hover'
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default AddToCartButtons
import { useContext } from "react";
import { MyContext } from "../../MyContext";

export const AddSubtractProduct = ({title, price}) => {

    const { itemsInCart, setItemsInCart } = useContext(MyContext);

    const subtract = () => {
        if (title in itemsInCart) {
          if (itemsInCart[title][0] > 1) {
            itemsInCart[title][0] = itemsInCart[title][0] - 1;
            setItemsInCart({...itemsInCart});
          } else {
            delete itemsInCart[title];
            setItemsInCart({...itemsInCart}); 
          }
        }
        console.log(itemsInCart);
      }
    
      const add = () => {
        if (title in itemsInCart) {
          itemsInCart[title][0] = itemsInCart[title][0] + 1;
          setItemsInCart({...itemsInCart});
        } else {
          itemsInCart[title] = [1, price];
          console.log(itemsInCart);
          setItemsInCart({...itemsInCart});
        }
        console.log(itemsInCart);
      }
    
    return (
    <div className="addSubtractProduct">
        <button onClick={subtract}>-</button>
        <p>{(title in itemsInCart ? itemsInCart[title][0] : 0)}</p>
        <button onClick={add}>+</button>
    </div>
    )
}
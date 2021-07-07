import { useContext } from "react";
import { ICartItem } from "../../interfaces/ICartItem";
import CartContext from "../contexts/CartContext";
import classes from "./CartItem.module.css";
const CartItem = ({ item }: { item: ICartItem }) => {
    const {dispatch} = useContext(CartContext)
    const price = item.price
    const subTotal = item.quantity * item.price
    const handleIncrement = () => {
        dispatch({type:"increment",payload:item.id})
    }
    const handleDecrement = () => {
        dispatch({ type: "decrement", payload: item.id })
    }
  return (
    <li className={classes["cart-item"]}>
      <div className={classes["product-details"]}>
              <span><h3>{item.title}</h3></span>
        <div className={classes.price}>
                  <span>Price : €{price.toFixed(2)}</span>
                  <span>Sub-Total : €{subTotal.toFixed(2)}</span>
        </div>
        <span className={classes.controls}>
          <button onClick={handleDecrement}>-</button>
                  <span>{item.quantity}</span>
          <button onClick={handleIncrement}>+</button>
        </span>
      </div>
          <div className={classes["product-image"]}>
              <img src={item.image} alt={item.title}/>
      </div>
    </li>
  );
};

export default CartItem;

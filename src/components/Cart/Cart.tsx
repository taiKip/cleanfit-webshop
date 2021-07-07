
import { useContext } from 'react'
import CartContext from '../contexts/CartContext'
import classes from './Cart.module.css'
import CartItem from './CartItem'
const Cart = () => {
    const { state } = useContext(CartContext)
    
    const total = state.totalAmount;
    
    return (
        <ul className={classes.cart}>
            {state.items&&state.items.map(item => <CartItem item={item} key={item.id}/>)}
           {state.items.length===0?<h3>You Currently Have No Items In Your Cart</h3>:""}
            <div className={classes.total}>
                <h3>Total : €{total.toFixed(2)}</h3>
            </div>
        </ul>
    )
}

export default Cart

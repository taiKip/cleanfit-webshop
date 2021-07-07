
import { useContext} from 'react'
import { ICartItem } from '../../interfaces/ICartItem'
import { IProduct } from '../../interfaces/IProduct'
import CartContext from '../contexts/CartContext'
import classes from './Item.module.css'
const Item = ({ item }: { item: IProduct }) => {
    const { dispatch } = useContext(CartContext)
    const newItem:ICartItem = {
       ...item,quantity:1    
    }
    const handleClick = () => {
        dispatch({type:"add",payload:newItem})
    }
    return (
        <li className={classes.item}>
            <div className={classes.image}>
                <img src={item.image} alt={item.title}/>
            </div>
            <div className={classes.description}>
                <h3>{item.title}</h3>
                <div>{item.description}</div>
                <h3>€{item.price.toFixed(2)}</h3>
            </div>
            <button className={classes["add-button"]} onClick={handleClick}>Add Item</button>
        </li>
    )
}

export default Item

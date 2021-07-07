import { createContext} from "react";
import { IState } from "../../interfaces/IState";
import { CARTACTIONS } from "../../types/actionTypes";
const initialState:IState = {
    items: [],
    totalAmount:0
}
 const CartContext = createContext({
    state: initialState,
    dispatch:(actions:CARTACTIONS)=>{}
 })

export default CartContext;
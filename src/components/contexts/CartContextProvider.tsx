import { ReactNode, useContext,useReducer } from "react"
import { IState } from "../../interfaces/IState"
import { cartReducer } from "../../reducers/cartReducer"
import CartContext from "./CartContext"
const initialState: IState={
    items: [],
    totalAmount:0
    
}
const CartContextProvider = ({children}:{children:ReactNode}) => {
  const [state,dispatch]  = useReducer(cartReducer,initialState)
    return (
        <CartContext.Provider value={{state,dispatch}}>
            {children}
       </CartContext.Provider>
    )
}

export default CartContextProvider

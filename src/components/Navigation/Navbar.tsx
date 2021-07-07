import AddShoppingCart from "@material-ui/icons/AddShoppingCart";
import classes from "./Navbar.module.css";
import CartContext from "../contexts/CartContext";
import {ChangeEventHandler, useEffect,useState} from 'react'
import { useContext } from "react";
import SearchContext from "../contexts/SearchContext";
const Navbar = ({ toggle }: { toggle: () => void }) => {
  const { state } = useContext(CartContext)
  const [animate, setAnimate] = useState(false)
  const {searchItem,setSearchItem}= useContext(SearchContext)
  let cartStyles = `${classes["cart-icon"]} ${animate?classes["scale-cart"]:""}`
  useEffect(() => {
   
      if (state.items.length === 0) {
        return
    }
    setAnimate(true)
    const timeout = setTimeout(() => {
     setAnimate(false)
    }, 300)
    return ()=>clearTimeout(timeout)
  }, [state.items])
  const handleSearch:ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchItem(event.target.value)
  }
  return (
    <nav className={classes["nav-bar"]}>
      <div>
        <h1>Clean Fit</h1>
          </div>
        
      <div className={classes["search"]}>
        <input type="text" placeholder="Search..." onChange={handleSearch} value={ searchItem}/>
      </div>
      <div className={cartStyles} onClick={toggle}>
        <span>{state.items.length}</span>
        <AddShoppingCart style={{ fontSize: 42 }} />
      </div>
    </nav>
  );
};

export default Navbar;

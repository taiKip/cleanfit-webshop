import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navigation/Navbar";
import { QueryClientProvider, QueryClient } from "react-query";
import Products from "./components/Products/Products";
import Modal from "./components/UI/Modal";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/contexts/CartContextProvider";
import SearchContextProvider from "./components/contexts/SearchContextProvider";

const queryClient = new QueryClient();
const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    setShowModal(prev=>!prev)
  }
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <SearchContextProvider>
          {showModal && (
            <Modal toggle={handleToggle}>
              <Cart />
            </Modal>
          )}
          <Navbar toggle={handleToggle} />
            <Products />
          </SearchContextProvider>
        </CartContextProvider>
      </QueryClientProvider>
    </div>
  );
};

export default App;

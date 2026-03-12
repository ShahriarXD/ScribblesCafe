import { useState } from "react";
import "./App.css";
import Blogs from "./componenets/Navbar/Blogs";
import Navbar from "./componenets/Navbar/Navbar";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (recipe) => {
    setCart([...cart, recipe]);
  };

  const handleRemoveFromCart = (indexToRemove) => {
    setCart(cart.filter((_, index) => index !== indexToRemove));
  };
  return (
    <>
      <Navbar cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Navbar>
      <Blogs handleAddToCart={handleAddToCart}></Blogs>
    </>
  );
}

export default App;

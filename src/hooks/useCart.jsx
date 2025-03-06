import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const useCart = () => {
  const { cartCount, dispatch } = useContext(CartContext);

  const addToCart = () => dispatch({ type: "increment" });
  const removeFromCart = () => dispatch({ type: "decrement" });

  return { cartCount, addToCart, removeFromCart };
};

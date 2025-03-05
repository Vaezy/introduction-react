import { createContext, useReducer } from "react";
import { CartReducer, initialState } from "../reducers/CartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartCount: state.cartCount, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

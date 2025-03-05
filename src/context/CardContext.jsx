import { createContext, useState } from "react";

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cardCount, setCardCount] = useState(0);

  const addToCart = () => {
    setCardCount((prev) => prev + 1);
  };

  return (
    <CardContext.Provider value={{ cardCount, addToCart }}>
      {children}
    </CardContext.Provider>
  );
};

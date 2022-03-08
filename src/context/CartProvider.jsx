import React, { useContext, createContext, useState } from "react";
const CartContext = createContext();

export const useCartProducts = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cartProductId, setCartProductId] = useState(() =>
    JSON.parse(window.localStorage.getItem("@carts_products") || "[]")
  );

  const storeCartProductId = (prodId) => {
    try {
      const newProduct = [...cartProductId, prodId];
      const jsonValue = JSON.stringify(newProduct);
      window.localStorage.setItem("@carts_products", jsonValue);
      setCartProductId(newProduct);
    } catch (e) {
      console.log(e);
    }
  };

  const removeCartProductId = (prodId) => {
    console.log(prodId);
    const newProduct = cartProductId.filter((item) => item !== prodId);
    const jsonValue = JSON.stringify(newProduct);
    window.localStorage.setItem("@carts_products", jsonValue);
    setCartProductId(newProduct);
  };

  return (
    <CartContext.Provider
      value={{ cartProductId, storeCartProductId, removeCartProductId }}
    >
      {children}
    </CartContext.Provider>
  );
}

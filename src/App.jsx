import React from "react";
import "./App.css";
import Header from "./components/Header";
import CartProvider from "./context/CartProvider";

import MyRoutes from "./MyRoutes";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <Header />
        <MyRoutes />
      </div>
    </CartProvider>
  );
}

export default App;

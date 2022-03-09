import React from "react";
import "./App.css";
import Header from "./components/Header";
import CartProvider from "./context/CartProvider";
import UserProvider from "./context/UserProvider";

import MyRoutes from "./MyRoutes";

function App() {
  return (
    <CartProvider>
      <UserProvider>
        <div className="App">
          <Header />
          <MyRoutes />
        </div>
      </UserProvider>
    </CartProvider>
  );
}

export default App;

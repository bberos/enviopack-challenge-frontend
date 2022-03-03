import React from "react";
import { Routes, Route } from "react-router-dom";

import ShopScreen from "./screens/Shop";
import CartScreen from "./screens/Cart";
import PurchaseScreen from "./screens/Purchase";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ShopScreen />} />
      <Route path="/cart" element={<CartScreen />} />
      <Route path="/purchase" element={<PurchaseScreen />} />
    </Routes>
  );
}

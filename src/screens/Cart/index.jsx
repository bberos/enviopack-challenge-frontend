import React from "react";
import { Container } from "./styles";
import CartList from "./../../components/Cart/CartList";
import TotalCart from "./../../components/Cart/TotalCart";

export default function CartScreen() {
  return (
    <Container>
      <h1>Carrito</h1>
      <CartList />
      <TotalCart />
      <div className="ButtonsContainer">
        <button>Volver al catalogo</button>
        <button>Finalizar compra</button>
      </div>
    </Container>
  );
}

import React from "react";
import { Container } from "./styles";
import CartProduct from "./../CartProduct";

export default function CartList() {
  return (
    <Container>
      <CartProduct />
      <CartProduct />
      <CartProduct />
      <CartProduct />
    </Container>
  );
}

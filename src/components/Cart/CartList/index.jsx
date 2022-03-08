import React from "react";
import { Container } from "./styles";
import CartProduct from "./../CartProduct";

export default function CartList(props) {
  const { cartProduct } = props;
  return (
    <Container>
      {cartProduct ? (
        cartProduct.map((product) => {
          return <CartProduct key={product.id} product={product} />;
        })
      ) : (
        <h1>No hay productos en el carrito.</h1>
      )}
    </Container>
  );
}

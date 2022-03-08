import React from "react";
import { Container } from "./styles";

export default function CartProduct() {
  return (
    <Container>
      <div className="leftContainer">
        <img
          src="/src/assets/image-product.jpg"
          alt="product-image"
          className="image"
        />
        <h1 className="title">Celular Samsung Galaxy A02 32 GB Azul</h1>
      </div>
      <div className="rightContainer">
        <h1 className="price">$ 21499</h1>
        <button>X</button>
      </div>
    </Container>
  );
}

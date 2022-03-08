import React from "react";
import { Container, Button } from "./styles";

export default function ProductCard(props) {
  const { productData } = props;
  return (
    <Container>
      <img
        src="/src/assets/image-product.jpg"
        alt="product-image"
        className="image"
      />
      <h1 className="title">{productData.title}</h1>
      <h1 className="price">$ {productData.price}</h1>
      <Button>Agregar al carrito</Button>
    </Container>
  );
}

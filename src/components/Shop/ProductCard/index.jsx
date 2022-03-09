import React from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { Button } from "./../../../styles/shared/Button";
import { useCartProducts } from "../../../context/CartProvider";
import ProductImage from "./../../../assets/image-product.jpg";

export default function ProductCard({ productData }) {
  const { id, title, price } = productData;
  const navigateTo = useNavigate();
  const { cartProductId, storeCartProductId } = useCartProducts();

  const checkCart = () => {
    const result = cartProductId.some((value) => value === id);
    return result;
  };
  const handleAddToCart = () => {
    if (checkCart()) {
      return navigateTo("/cart");
    }
    return storeCartProductId(id);
  };
  return (
    <Container>
      <img src={ProductImage} alt="product-image" className="image" />
      <h1 className="title">{title}</h1>
      <h1 className="price">$ {price}</h1>
      <Button width={"80%"} onClick={() => handleAddToCart()}>
        {checkCart() ? "Ver Carrito" : "Agregar al carrito"}
      </Button>
    </Container>
  );
}

import React from "react";
import { useCartProducts } from "../../../context/CartProvider";
import { Button } from "../../../styles/shared/Button";
import { Container } from "./styles";
import ProductImage from "./../../../assets/image-product.jpg";

export default function CartProduct({ product }) {
  const { id, title, price } = product;
  const { removeCartProductId } = useCartProducts();
  const handleDelete = (id) => {
    removeCartProductId(id);
  };
  return (
    <Container>
      <div className="leftContainer">
        <img src={ProductImage} alt="product-image" className="image" />
        <h1 className="title">{title}</h1>
      </div>
      <div className="rightContainer">
        <h1 className="price">$ {price}</h1>
        <Button width="20%" onClick={() => handleDelete(id)}>
          X
        </Button>
      </div>
    </Container>
  );
}

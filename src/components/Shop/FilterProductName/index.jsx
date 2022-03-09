import React from "react";
import { Container, InputProduct } from "./styles";

export default function FilterProductName(props) {
  const { productName, setProductName } = props;

  const handleChangeProduct = (e) => {
    setProductName(e.target.value);
  };
  return (
    <Container>
      <InputProduct
        type="text"
        placeholder="Buscar productos por nombre"
        value={productName}
        onChange={handleChangeProduct}
      />
    </Container>
  );
}

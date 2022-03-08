import React from "react";
import ProductCard from "../ProductCard";
import { Container } from "./styles";

export default function ProductList(props) {
  const { currentItems } = props;
  return (
    <Container>
      {currentItems.map((item) => {
        return <ProductCard key={item.id} productData={item} />;
      })}
    </Container>
  );
}

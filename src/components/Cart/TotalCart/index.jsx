import React from "react";
import { Container } from "./styles";

export default function TotalCart({ total }) {
  return (
    <Container>
      <h1>Total</h1>
      <h1>${total}</h1>
    </Container>
  );
}

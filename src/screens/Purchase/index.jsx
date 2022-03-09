import React from "react";
import { Container } from "./styles";
import { useLocation } from "react-router-dom";

export default function PurchaseScreen() {
  const location = useLocation();
  console.log(location.state);
  return <Container>PurchaseScreen</Container>;
}

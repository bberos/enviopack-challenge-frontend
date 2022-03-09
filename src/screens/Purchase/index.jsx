import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Container } from "./styles";
import { Button } from "../../styles/shared/Button";

export default function PurchaseScreen() {
  const location = useLocation();
  const navigateTo = useNavigate();
  console.log(location.state);
  return (
    <Container>
      <h1>Estado de la compra</h1>
      <div className="purchaseStatusOverlay">
        {location.state.status === "success" ? (
          <div className="purchaseStatusContainer">
            <h2>La compra se realizo con exito</h2>
            <Button onClick={() => navigateTo("/")}>Volver al catalogo</Button>
          </div>
        ) : (
          <div className="purchaseStatusContainer">
            <h2>
              Ocurrio un error con la compra, revisa que el importe no supere el
              credito disponible en tu cuenta
            </h2>
            <Button width="" onClick={() => navigateTo("/cart")}>
              Volver al carrito
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}

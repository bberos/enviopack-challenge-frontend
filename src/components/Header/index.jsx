import React from "react";
import { NavLink } from "react-router-dom";
import { Container, LeftContainer, RightContainer } from "./styles";
export default function Header() {
  return (
    <Container>
      <LeftContainer>
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "link__active" : "link")}
        >
          Tienda de Productos
        </NavLink>
      </LeftContainer>
      <RightContainer>
        <div className="link">Juan Ignacio</div>
        <NavLink
          to="/cart"
          className={(navData) => (navData.isActive ? "link__active" : "link")}
        >
          Carrito (1)
        </NavLink>
        <div className="link">Credito $50000</div>
      </RightContainer>
    </Container>
  );
}

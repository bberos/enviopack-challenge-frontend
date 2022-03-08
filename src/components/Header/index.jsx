import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useCartProducts } from "../../context/CartProvider";
import { Container, LeftContainer, RightContainer } from "./styles";
export default function Header() {
  const { cartProductId } = useCartProducts();

  const countCartProduct = useMemo(() => {
    return cartProductId?.length;
  }, [cartProductId]);

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
          Carrito <>({countCartProduct})</>
        </NavLink>
        <div className="link">Credito $50000</div>
      </RightContainer>
    </Container>
  );
}

import React, { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useCartProducts } from "../../context/CartProvider";
import { useUserData } from "../../context/UserProvider";
import { Container, LeftContainer, RightContainer } from "./styles";
export default function Header() {
  const { cartProductId } = useCartProducts();
  const { userData } = useUserData();

  const countCartProduct = useMemo(() => {
    return cartProductId?.length;
  }, [cartProductId]);

  return (
    <>
      {userData === undefined ? (
        <h1>Cargando...</h1>
      ) : (
        <Container>
          <LeftContainer>
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "link__active" : "link"
              }
            >
              Tienda de Productos
            </NavLink>
          </LeftContainer>
          <RightContainer>
            <div className="link">{userData.firstName}</div>
            <NavLink
              to="/cart"
              className={(navData) =>
                navData.isActive ? "link__active" : "link"
              }
            >
              Carrito <>({countCartProduct})</>
            </NavLink>
            <div className="link">Credito ${userData.credit}</div>
          </RightContainer>
        </Container>
      )}
    </>
  );
}

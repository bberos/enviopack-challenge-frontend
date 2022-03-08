import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Button } from "../../styles/shared/Button";
import { useNavigate } from "react-router-dom";

import products from "./../../assets/json/products.json";
import CartList from "./../../components/Cart/CartList";
import TotalCart from "./../../components/Cart/TotalCart";
import { useCartProducts } from "../../context/CartProvider";

export default function CartScreen() {
  const navigateTo = useNavigate();
  const { cartProductId } = useCartProducts();
  const [cartProduct, setCartProduct] = useState();
  const allProducts = products.productos;

  const fetchCartProducts = () => {
    const filtered = allProducts.filter((product) =>
      cartProductId.includes(product.id)
    );
    setCartProduct(filtered);
  };

  useEffect(() => {
    if (cartProductId.length > 0) {
      fetchCartProducts();
    }
  }, [cartProductId]);

  const totalPrice =
    cartProduct && cartProduct.reduce((s, a) => s + a.price, 0);

  const cartIsEmpty = cartProductId.length > 0;

  return (
    <Container>
      <h1>Carrito</h1>
      {cartIsEmpty ? (
        <>
          <CartList cartProduct={cartProduct} />
          <TotalCart total={totalPrice} />
        </>
      ) : (
        <h1>No hay productos</h1>
      )}
      <div className="buttonsContainer">
        <Button width="15%" onClick={() => navigateTo("/")}>
          Volver al catalogo
        </Button>
        <Button
          width="15%"
          onClick={() => navigateTo("/purchase")}
          disabled={!cartIsEmpty}
        >
          Finalizar compra
        </Button>
      </div>
    </Container>
  );
}

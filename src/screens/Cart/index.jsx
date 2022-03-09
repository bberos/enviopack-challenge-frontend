import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Button } from "../../styles/shared/Button";
import { useNavigate } from "react-router-dom";

import products from "./../../assets/json/products.json";
import CartList from "./../../components/Cart/CartList";
import TotalCart from "./../../components/Cart/TotalCart";
import { useCartProducts } from "../../context/CartProvider";
import { useUserData } from "../../context/UserProvider";

export default function CartScreen() {
  const navigateTo = useNavigate();
  const { cartProductId, removeAllCartProduct } = useCartProducts();
  const { userData, setUserData } = useUserData();
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

  const handlePurchase = () => {
    const result = userData.credit - totalPrice;
    if (result >= 0) {
      setUserData({ ...userData, credit: result });
      removeAllCartProduct();
      navigateTo("/purchase", { state: { status: "success" } });
    } else {
      navigateTo("/purchase", { state: { status: "failure" } });
    }
  };

  return (
    <Container>
      <h1>Carrito</h1>
      {cartIsEmpty ? (
        <>
          <CartList cartProduct={cartProduct} />
          <TotalCart total={totalPrice} />
        </>
      ) : (
        <div className="cardOverlay">
          <h2>No hay productos en el carrito</h2>
        </div>
      )}
      <div className="buttonsContainer">
        <Button width="15%" onClick={() => navigateTo("/")}>
          Volver al catalogo
        </Button>
        <Button width="15%" onClick={handlePurchase} disabled={!cartIsEmpty}>
          Finalizar compra
        </Button>
      </div>
    </Container>
  );
}

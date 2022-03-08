import React from "react";
import { Container } from "./styles";

export default function OrderProductByPrice(props) {
  const { selectedValue, setSelectedValue } = props;

  const handleChangePriceFilter = (e) => {
    setSelectedValue(e.target.value);
  };

  return (
    <Container>
      <h1 className="text">Ordenar por</h1>
      <select
        className="select"
        defaultValue={selectedValue}
        onChange={handleChangePriceFilter}
      >
        <option value="default" disabled hidden>
          Seleccionar
        </option>
        <option value="max">Mayor Precio</option>
        <option value="min">Menor Precio</option>
      </select>
    </Container>
  );
}

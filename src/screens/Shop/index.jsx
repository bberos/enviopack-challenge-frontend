import React, { useEffect, useState, useMemo } from "react";

import { Container } from "./styles";
import FilterProductName from "../../components/Shop/FilterProductName";
import OrderProductByPrice from "../../components/Shop/OrderProductByPrice";
import ProductList from "../../components/Shop/ProductsList";
import Paginate from "../../components/Shop/Paginate";
import products from "./../../assets/json/products.json";

export default function ShopScreen() {
  const [productName, setProductName] = useState("");
  const [selectedValue, setSelectedValue] = useState("default");
  const [productsList, setProductsList] = useState(products.productos);

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filterProductList, setFilterProductList] = useState();

  //definimos la cantidad de elementos que queremos devolver por pagina.
  const itemsPerPage = 6;

  //paginado sin filtros y en el caso de que haya filtros tanto por precio como por name.
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    if (selectedValue === "default") {
      setPageCount(Math.ceil(filterProductList.length / itemsPerPage));
      setCurrentItems(filterProductList.slice(itemOffset, endOffset));
    } else {
      setCurrentItems(sortedItems.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(sortedItems.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage, productName, selectedValue]);

  //esta funcion filtra los resultados por el nombre si se ingresa mas de 2 caracteres, lo ideal si le estuviese pegando a una api seria hacer un debounce para no hacer una query por letra.
  useMemo(() => {
    let result = [...productsList];
    if (productName.length < 2) {
      setFilterProductList(result);
    } else {
      let filter = productsList.filter((item) => {
        return item.title.toLowerCase().includes(productName.toLowerCase());
      });
      setFilterProductList(filter);
    }
    return result;
  }, [productName]);

  // esta funcion nos ordena por precio nuestro listado, en el caso de que haya una busqueda por name consume de ese array y en el caso de que no haya un filtro por nombre consume derecho del json "api".
  const sortedItems = useMemo(() => {
    let result =
      productName.length > 1 ? [...filterProductList] : [...productsList];
    if (selectedValue === "max") {
      result.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (b.price > a.price) return 1;
        return 0;
      });
    }
    if (selectedValue === "min") {
      result.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (b.price > a.price) return -1;
        return 0;
      });
    }
    return result;
  }, [selectedValue, productsList, productName]);

  return (
    <Container>
      <h1>Catalogo</h1>
      <div className="filtersContainer">
        <FilterProductName
          productName={productName}
          setProductName={setProductName}
        />
        <OrderProductByPrice
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        {currentItems !== null ? (
          <>
            <ProductList
              currentItems={currentItems}
              itemsPerPage={itemsPerPage}
            />
            <Paginate
              pageCount={pageCount}
              itemsPerPage={itemsPerPage}
              productsList={productsList}
              setItemOffset={setItemOffset}
            />
          </>
        ) : (
          <h1>Cargando...</h1>
        )}
      </div>
    </Container>
  );
}

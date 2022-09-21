import React, { useState } from "react";
export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [productCartList, setProductCartList] = useState([]);

  const addItem = (item, quantity) => {
    let isInCart = (id) => {
      let existeElProducto = productCartList.find((item) => item.id === id);
      return existeElProducto;
    };
    if (isInCart) {
      let nuevaLista = productCartList.filter(
        (producto) => producto.id !== item.id
      );
      const newProduct = {
        ...item,
        quantity,
      };
      nuevaLista.push(newProduct);
      setProductCartList(nuevaLista);
    } else {
      const newProduct = {
        ...item,
        quantity,
      };
      const newArreglo = [...productCartList];
      newArreglo.push(newProduct);
      setProductCartList(newArreglo);
    }
  };
  const removeItem = (itemId) => {
    const newArreglo = productCartList.filter(
      (product) => product.id !== itemId
    );
    setProductCartList(newArreglo);
  };

  const clearAllItems = () => {
    setProductCartList([]);
  };
  let precioFinal=500
  let precios=[]
  const obtenerPrecios = (precio) => {
    precios.push(precio);
  };
  return (
    <CartContext.Provider
      value={{
        productCartList,
        addItem,
        removeItem,
        clearAllItems,
        precioFinal,
        obtenerPrecios
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
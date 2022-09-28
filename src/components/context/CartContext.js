import React, { useState, useEffect } from "react";
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

  const cambiarCantidad = (item, quantity) => {
    let isInCart = (id) => {
      let existeElProducto = productCartList.find((item) => item.id === id);

      return existeElProducto;
    };

    if (isInCart) {
      const newArreglo = [...productCartList];

      const updateArr = newArreglo.map((element) => {
        if (element.id === item.id) {
          element.quantity = quantity;
        }

        return element;
      });

      setProductCartList(updateArr);
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
    setProductCartList([])
    setProductCartList(newArreglo);
    precioTotal();
  };

  const clearAllItems = () => {
    setProductCartList([]);
  };

  let precioTotal = () => {
    return productCartList.reduce(
      (acc, item) => acc + item.quantity * Number(item.price.slice(1)),
      0
    );
  };
  return (
    <CartContext.Provider
      value={{
        productCartList,
        addItem,
        removeItem,
        clearAllItems,
        precioTotal,
        cambiarCantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

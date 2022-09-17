import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer ";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./components/Inicio/Inicio";
import { AtencionAlCliente } from "./components/AtencionAlCliente/AtencionAlCliente";
import { CartContainer } from "./components/CartContainer/CartContainer";
import { CartProvider } from "./components/context/CartContext";

export const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/catalogo" element={<ItemListContainer />} />
            <Route path="/juegos" element={<ItemListContainer />} />
            <Route path="/catalogo/:valor" element={<ItemListContainer />} />
            <Route path="/juegos/:valor" element={<ItemListContainer />} />
            <Route
              path="/detalles/:idJuego"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/atencion-al-cliente"
              element={<AtencionAlCliente />}
            />
            <Route path="/cart" element={<CartContainer />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

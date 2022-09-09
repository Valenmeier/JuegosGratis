import "./App.css";
import { NavBar } from "./components/Navbar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer ";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "./components/Inicio/Inicio";
import {AtencionAlCliente} from "./components/AtencionAlCliente/AtencionAlCliente"

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<ItemListContainer />} />
          <Route path="/juegos" element={<ItemListContainer />} />
          <Route path="/detalles/:idJuego" element={<ItemDetailContainer/>}/>
          <Route path="/atencion-al-cliente" element={<AtencionAlCliente/>}/>
        </Routes>
        {/* <NavBar />
        <ItemListContainer />
        <ItemDetailContainer /> */}
      </div>
    </BrowserRouter>
  );
};

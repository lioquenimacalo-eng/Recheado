import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// Importa todas as páginas

import Contacto from "./pages/Contactos";
import Cardapio from "./pages/Cardapio";
import Inicio from "./pages/Inicio";
import SobreNos from "./pages/SobreNos";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Cardapio" element={<Cardapio />} />
        <Route path="/" element={< Inicio />} />
        <Route path="/SobreNos" element={<SobreNos /> } />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}
// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importação das páginas
import Home from '../pages/Home';


// Definindo as rotas
const RoutesSystem: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" element={} />
        <Route path="/contact" element={} /> */}
        {/* Rota para páginas não encontradas */}
        <Route path="*" element={"Pagina não encontrada 404"} />
      </Routes>
    </Router>
  );
};

export default RoutesSystem;

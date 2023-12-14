import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"; //v6

// imports dos componentes de página
import HomePage from "../pages/HomePage/HomePage";
import TipoEventos from "../pages/TipoEventosPage/TipoEventosPage";
import EventosPage from "../pages/EventosPage/EventosPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import TestePage from "../pages/TestePage/TestePage";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { PrivateRoute } from "./PrivateRoute";
import EventosAlunoPage from "../pages/EventosAlunoPage/EventosAlunoPage";
import Comentario from "../pages/ComentariosEvento/Comentario";

// Componente Rota
const Rotas = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route element={<HomePage />} path="/" exact />

        <Route
          path="/tipo-eventos"
          element={
            <PrivateRoute redirectTo="/">
              <TipoEventos />
            </PrivateRoute>
          }
        />

        <Route
          path="/eventos"
          element={
            <PrivateRoute redirectTo="/">
              <EventosPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/eventos-aluno"
          element={
            <PrivateRoute redirectTo="/">
              <EventosAlunoPage />
            </PrivateRoute>
          }
        />
<Route
path="/comentarios-evento-all/:idEvento"
element={
  <PrivateRoute redirectTo="/">
    <Comentario />
  </PrivateRoute>
}
/>
<Route
path="/comentarios-evento-only/:idEvento"
element={
  <PrivateRoute redirectTo="/">
    <Comentario />
  </PrivateRoute>
}
/>

        <Route element={<LoginPage />} path="/login" />
        <Route element={<TestePage />} path="/teste/" />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Rotas;

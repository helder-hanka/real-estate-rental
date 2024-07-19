import React from "react";
import { NavLink } from "react-router-dom";
import "../../../utils/styles/Sass/ErrorPages.scss";
import Header from "../Header";
import Footer from "../Footer";

const ErrorPage = () => {
  return (
    <>
      <Header />
      <main className="error-page">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink className="nav-link-error" to={"/"}>
          Retourner sur la page d’accueil
        </NavLink>
      </main>
      <Footer />
    </>
  );
};

export default ErrorPage;

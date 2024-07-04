import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link to={"/about"}>A Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

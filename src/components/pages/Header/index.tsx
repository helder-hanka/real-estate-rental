import React from "react";
import { Link } from "react-router-dom";
import "../../../utils/styles/Sass/Header.scss";
import KasaText from "../../Svg/KasaText";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={"/"}>
              <KasaText />
            </Link>
          </li>
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

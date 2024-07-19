import React from "react";
import "../../../utils/styles/Sass/Header.scss";
import KasaText from "../../Svg/KasaText";
import styled from "../../../utils/styles/styled";
import useMediaquery from "../../../utils/hooks/useMediaquery";

const Header: React.FC = () => {
  const match = useMediaquery("(max-width:600px)");

  return (
    <header>
      <nav>
        <ul>
          <li>
            <styled.StyldeLink to={"/"}>
              <KasaText
                width={match ? "145" : "211"}
                height={match ? "46.88" : "68"}
                pathFillOne="#FF6060"
                pathFillTwo="#FF6060"
                pathFillThree="#FF6060"
                pathFilFour="#FF6060"
                pathFillFive="#FF6060"
              />
            </styled.StyldeLink>
          </li>
          <li>
            <styled.StyldeLink to={"/"}>Accueil</styled.StyldeLink>
          </li>
          <li>
            <styled.StyldeLink to={"/a-propos"}>A Propos</styled.StyldeLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

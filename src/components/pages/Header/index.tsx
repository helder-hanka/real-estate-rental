import React, { useState, useEffect } from "react";
import "../../../utils/styles/Sass/Header.scss";
import KasaText from "../../Svg/KasaText";
import styled from "../../../utils/styles/styled";

const Header: React.FC = () => {
  const [matches, setMatch] = useState<boolean>(
    window.matchMedia("(max-width:600px)").matches
  );

  useEffect(() => {
    const mediaQueryList = window.matchMedia("(max-width:600px)");
    const listener = (e: MediaQueryListEvent) => setMatch(e.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [matches]);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <styled.StyldeLink to={"/"}>
              <KasaText
                width={matches ? "145" : "211"}
                height={matches ? "46.88" : "68"}
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

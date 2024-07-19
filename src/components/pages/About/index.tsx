import React, { useState } from "react";
import ModalImg from "../../ModalImg";
import kalenEmley from "../../../utils/images/kalen-emley.jpeg";
import DropdownList from "../../DropdownList";
import "../../../utils/styles/Sass/About.scss";

interface InfoIsOpen {
  reliability: boolean;
  respect: boolean;
  service: boolean;
  secutity: boolean;
}

const About: React.FC = () => {
  const [isOpen, setIsOpen] = useState<InfoIsOpen>({
    reliability: false,
    respect: false,
    service: false,
    secutity: false,
  });

  const handleClickReliability = () => {
    setIsOpen((prev) => ({
      ...prev,
      reliability: !prev.reliability,
    }));
  };
  const handleClickRespect = () => {
    setIsOpen((prev) => ({
      ...prev,
      respect: !prev.respect,
    }));
  };
  const handleClickService = () => {
    setIsOpen((prev) => ({ ...prev, service: !prev.service }));
  };
  const handleClickSecurity = () => {
    setIsOpen((prev) => ({ ...prev, secutity: !prev.secutity }));
  };

  return (
    <>
      <ModalImg src={kalenEmley} alt="image de montagne et la riviére" />
      <article className="aboutContainer">
        <DropdownList
          handleClick={handleClickReliability}
          isOpen={isOpen.reliability}
          text="Fiabilité"
        >
          <li>
            Les annonces postées sur Kasa garantissent une fiabilité totale. Les
            photos sont conformes aux logements, et toutes les informations sont
            réguliérement vérifiées par nos équipes.
          </li>
        </DropdownList>
        <DropdownList
          handleClick={handleClickRespect}
          isOpen={isOpen.respect}
          text="Respect"
        >
          <li>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </li>
        </DropdownList>
        <DropdownList
          handleClick={handleClickService}
          isOpen={isOpen.service}
          text="Service"
        >
          <li>
            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
            comportement discriminatoire ou de perturbation du voisinage
            entraînera une exclusion de notre plateforme.
          </li>
        </DropdownList>
        <DropdownList
          handleClick={handleClickSecurity}
          isOpen={isOpen.secutity}
          text="Sécurité"
        >
          <li>
            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
            pour les voyageurs, chaque logement correspond aux critéres de
            sécurité établis par nos services. En laissant une note aussi bien à
            l'hôte qu'au locataire, cela permet à nos équipes de vérifier que
            les standards sont bien respectés. Nous organisons également des
            ateliers sur sécurité domestique pour nos hôtes.
          </li>
        </DropdownList>
      </article>
    </>
  );
};

export default About;

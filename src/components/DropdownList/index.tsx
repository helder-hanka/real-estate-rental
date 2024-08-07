import React from "react";
import BtnDropdown from "../BtnDropdown";
import VectorUp from "../Svg/VectorUp";
import "../../utils/styles/Sass/DropdownList.scss";

interface Props {
  children: React.ReactNode;
  text: string;
  handleClick: () => void;
  isOpen: boolean;
}

const DropdownList: React.FC<Props> = ({
  children,
  text,
  handleClick,
  isOpen,
}) => {
  return (
    <article className="btnDropdownContainer">
      <BtnDropdown onClick={handleClick}>
        <h2>{text}</h2>
        <div className={!isOpen ? "vectorDown" : "vectorUp"}>
          <VectorUp width="24" height="14" />
        </div>
      </BtnDropdown>
      <ul className={isOpen ? "displayText" : ""}>{children}</ul>
    </article>
  );
};

export default DropdownList;

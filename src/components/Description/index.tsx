import React from "react";
import DropdownList from "../DropdownList";

interface Props {
  text: string;
  isOpen: boolean;
  handleClick: () => void;
}
const Description: React.FC<Props> = ({ text, isOpen, handleClick }) => {
  return (
    <DropdownList isOpen={isOpen} handleClick={handleClick} text="Description">
      {isOpen && (
        <p className={isOpen ? "slide-in-y-down" : "slide-in-y-down"}>{text}</p>
      )}
    </DropdownList>
  );
};

export default Description;

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
      {/* {isOpen && ( */}
      <p className={isOpen ? "slide-in-y-open" : "slide-in-y-close"}>{text}</p>
      {/* )} */}
    </DropdownList>
  );
};

export default Description;

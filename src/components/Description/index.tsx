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
      <li>{text}</li>
    </DropdownList>
  );
};

export default Description;

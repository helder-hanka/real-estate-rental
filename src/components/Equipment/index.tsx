import React from "react";
import DropdownList from "../DropdownList";

interface Props {
  items: string[];
  isOpen: boolean;
  handleClick: () => void;
}
const Equipment: React.FC<Props> = ({ items, isOpen, handleClick }) => {
  return (
    <DropdownList isOpen={isOpen} text="Équipements" handleClick={handleClick}>
      <>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </>
    </DropdownList>
  );
};

export default Equipment;

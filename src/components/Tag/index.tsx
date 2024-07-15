import React from "react";

interface Props {
  items: string[];
}
const Tag: React.FC<Props> = ({ items }) => {
  return (
    <ul className="tagContainer">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default Tag;

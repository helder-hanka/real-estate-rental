import React from "react";

interface Props {
  children: React.ReactNode;
  onClick: () => void;
}
const BtnDropdown: React.FC<Props> = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default BtnDropdown;

import React from "react";
import styled from "../../utils/styles/styled";

interface Props {
  src: string;
  alt: string;
  text: string;
}

const Figure: React.FC<Props> = ({ src, alt, text }) => {
  return (
    <styled.StyledFigure>
      <img src={src} alt={alt} />
      <figcaption>{text}</figcaption>
    </styled.StyledFigure>
  );
};

export default Figure;

import React from "react";
import styled from "../../utils/styles/styled";

interface Props {
  src: string;
  title: string;
}

const Figure: React.FC<Props> = ({ src, title }) => {
  return (
    <styled.StyledFigure>
      <img src={src} alt={title} />
      <figcaption>{title}</figcaption>
    </styled.StyledFigure>
  );
};

export default Figure;

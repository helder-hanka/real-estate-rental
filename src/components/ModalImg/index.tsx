import React from "react";
import styled from "../../utils/styles/styled";

interface Props {
  src: string;
  alt: string;
  text: string;
}

const ModalImg: React.FC<Props> = ({ src, alt, text }) => {
  return (
    <styled.StyledSection>
      <figure>
        <img src={src} alt={alt} />
        <figcaption>{text}</figcaption>
      </figure>
    </styled.StyledSection>
  );
};

export default ModalImg;

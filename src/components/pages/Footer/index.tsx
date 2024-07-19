import React from "react";
import KasaText from "../../Svg/KasaText";
import styled from "../../../utils/styles/styled";

const Footer = () => {
  return (
    <styled.StyledFooter>
      <KasaText
        width={"122"}
        height={"39.44"}
        pathFillOne="#FFFFFF"
        pathFillTwo="#FFFFFF"
        pathFillThree="#FFFFFF"
        pathFilFour="#FFFFFF"
        pathFillFive="#FFFFFF"
      />
      <styled.styledDivContainer>
        <styled.StyledCercle>
          <span>C</span>
        </styled.StyledCercle>
        <styled.styledSpan>
          2020 Kasa. All <span>rigths reserved</span>
        </styled.styledSpan>
      </styled.styledDivContainer>
    </styled.StyledFooter>
  );
};

export default Footer;

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../colors";

const size = {
  mobile: "600px",
};

const StyldeLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.black};
  &.active {
    text-decoration: underline;
  }
`;

const StyledFooter = styled.footer`
  background-color: ${colors.black};
  color: ${colors.white};
  text-align: center;
  height: 209px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const StyledCercle = styled.div`
  border: 1px solid white;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 12px;
  }
  @media (max-width: ${size.mobile}) {
    width: 10px;
    height: 10px;
    span {
      font-size: 8px;
    }
  }
`;

const styledDivContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  @media (max-width: ${size.mobile}) {
    align-items: flex-start;
  }
`;
const styledSpan = styled.span`
  font-size: 24px;
  @media (max-width: ${size.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 12px;
  }
`;

const StyledSection = styled.section`
  margin: 50px 100px 43px 100px;
  background-color: black;
  height: 223px;
  border-radius: 25px;
  figure {
    height: 100%;
    width: 100%;
    margin: 0;
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  @media (max-width: ${size.mobile}) {
    height: 111px;
    * {
      border-radius: 10px;
    }
    margin: 27px 20px 32px 20px;
    figure figcaption {
      font-size: 24px;
    }
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    text-align: center;
    border-radius: 25px;
    opacity: 0.4;
  }
  figcaption {
    position: absolute;
    text-align: center;
    font-size: 48px;
    font-weight: 700;
    color: ${colors.white};
  }
`;
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  StyldeLink,
  StyledFooter,
  StyledCercle,
  styledDivContainer,
  styledSpan,
  StyledSection,
};

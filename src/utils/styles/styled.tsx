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
    margin: 27px 20px 22px 20px;
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

const StyledFigure = styled.figure`
  width: 340px;
  height: 340px;
  position: relative;
  margin: 0;
  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
  figcaption {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: ${colors.white};
    font-weight: 700;
  }
  @media (max-width: ${size.mobile}) {
    width: 335px;
    height: 225px;
  }
`;

const StyledArticle = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 60px 0;
  margin: 50px 100px 43px 100px;
  padding-top: 56px;
  padding-bottom: 43px;
  background-color: #f6f6f6;
  border-radius: 25px;
  @media (max-width: ${size.mobile}) {
    margin: 27px 20px 0 20px;
    gap: 20px;
    padding-top: 0;
    padding-bottom: 27px;
    background-color: ${colors.white};
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
  StyledFigure,
  StyledArticle,
};

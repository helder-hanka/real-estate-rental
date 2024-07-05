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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  StyldeLink,
  StyledFooter,
  StyledCercle,
  styledDivContainer,
  styledSpan,
};

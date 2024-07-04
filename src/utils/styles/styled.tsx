import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../colors";

const StyldeLink = styled(NavLink)`
  text-decoration: none;
  color: ${colors.black};
  &.active {
    text-decoration: underline;
  }
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  StyldeLink,
};

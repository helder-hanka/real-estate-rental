import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors } from "../colors";

const StyldeLink = styled(Link)`
  text-decoration: none;
  ${(props) => `color: ${colors.black}`}
`;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  StyldeLink,
};

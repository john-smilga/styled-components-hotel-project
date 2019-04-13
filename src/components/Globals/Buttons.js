import styled from "styled-components";
import {
  setColors,
  setRem,
  setBorder,
  setLetterSpacing,
  setTransition,
  setFonts
} from "../../utils";
export const PrimaryBtn = styled.button`
  display: inline-block;
  background: ${setColors.primaryColor};
  color: ${setColors.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFonts.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColors.primaryColor })};
  ${setLetterSpacing(3)};
  cursor: pointer;
  ${setTransition()};
  &:hover {
    background: transparent;
    color: ${setColors.primaryColor};
  }
  ${props =>
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}`};
  text-decoration: none;
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`;

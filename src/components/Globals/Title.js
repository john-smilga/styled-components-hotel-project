import React from "react";
import styled from "styled-components";

import { setRem, setLetterSpacing } from "../../utils";
function Title({ className, title, center }) {
  return <h3 className={className}>{title}</h3>;
}

export default styled(Title)`
  font-size: ${setRem(36)};
  text-align: ${props => (props.center ? "center" : "left")};
  text-transform: capitalize;
  ${setLetterSpacing(5)};
`;

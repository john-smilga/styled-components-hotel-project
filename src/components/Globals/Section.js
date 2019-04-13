import styled from "styled-components";
import { setRem } from "../../utils/styles.js";
const Section = styled.section`
  padding: ${setRem(64)} 0;
  background: ${props => props.color};
`;

export default Section;

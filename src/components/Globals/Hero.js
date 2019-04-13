import styled from "styled-components";
import homeBcg from "../../images/homeBcg.jpeg";
import { setBackground, setFlex } from "../../utils";
const Hero = styled.header`
  min-height: 100vh;
  ${props =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0) " })};
  ${setFlex()};
`;

export default Hero;

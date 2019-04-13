import styled from "styled-components";

const fonts = "";

const defaultImage =
  "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";
//default HERO

const Hero = styled.header`
  min-height: 100vh;
  background: url(${props => props.img || defaultHero}) center/cover fixed
    no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// updated HERO
const Hero = styled.header`
  min-height: 100vh;
  ${props =>
    setBackground({ img: props.img, color: "rgba(255, 255, 255, 0) " })};
  ${setFlex()};
`;
// default Banner
const BannerWrapper = styled(Banner)`
  background: rgba(0, 0, 0, 0.7);
  text-align: center;
  padding: 5rem 2rem;
  letter-spacing: 2px;
  position: relative;
  color: #fff;
  h1 {
    text-transform: capitalize;
    font-size: 48px;
    color: #af9a7d;
    span {
      color: #fff;
    }
  }
  p {
    width: 85%;
    margin: 0 auto;
  }

  @media (min-width: 768px) {
    width: 70vw;
    border: 5px solid #af9a7d;
    p {
      width: 75%;
    }
  }
`;

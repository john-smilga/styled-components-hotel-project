import { css } from "styled-components";

export const setColor = {
  primaryColor: "#af9a7d",
  mainWhite: "#fff",
  mainBlack: "#222",
  mainGrey: "#ececec",
  lightGrey: "#f7f7f7"
};
export const setFont = {
  main: "  font-family: 'Lato', sans-serif;",
  slanted: ""
};
export const setBackground = ({
  img = "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  color = "rgba(0,0,0,0)"
} = {}) => {
  return `background:linear-gradient(${color},${color}), url(${img}) center / cover fixed no-repeat;`;
};

export const setFlex = ({ x = "center", y = "center" } = {}) => {
  return `display: flex;
  align-items: ${y};
  justify-content: ${x}`;
};

export const setRem = (number = 16) => {
  return `${number / 16}rem`;
};
export const setLetterSpacing = (number = 2) => {
  return `letter-spacing:${number}px`;
};

export const setBorder = ({
  width = "2px",
  style = "solid",
  color = `black`
} = {}) => {
  return `border:${width} ${style} ${color}`;
};

export const setTransition = ({
  property = "all",
  time = "0.3s",
  timing = "ease-in-out"
} = {}) => {
  return `transition:${property} ${time} ${timing}`;
};

const sizes = {
  large: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export const setShadow = {
  light: "box-shadow: 3px 3px 5px 0px rgba(0,0,0,0.75)",
  dark: "box-shadow: 6px 6px 5px 0px rgba(0,0,0,0.75)",
  darkest: "box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)"
};

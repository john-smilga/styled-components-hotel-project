import React from "react";
import styled from "styled-components";
import {
  setRem,
  setLetterSpacing,
  setTransition,
  setColor,
  setShadow,
  setBorder
} from "../../utils";
import { SmallBtn } from "../Globals/Buttons";
import PropTypes from "prop-types";

const Room = ({ className, room }) => {
  const { img = "", title = "", info = "", price = 0 } = room;

  return (
    <article className={className}>
      <div className="img-container">
        <img src={img} alt="single room" />
        <div className="price">${price}</div>
      </div>
      <div className="room-info">
        <h4>{title}</h4>
        <p>{info}</p>
        <SmallBtn>more info</SmallBtn>
      </div>
    </article>
  );
};

export default styled(Room)`
  background: ${setColor.mainWhite};
  margin: ${setRem(32)} 0;
  .img-container {
    background: ${setColor.mainBlack};
    position: relative;
    img {
      width: 100%;
      display: block;
      ${setTransition};
    }
    &:hover img {
      opacity: 0.5;
    }
    .price {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: ${setColor.mainWhite};
      ${setLetterSpacing(5)};
      font-size: ${setRem(22)};
      ${setBorder({ color: setColor.mainWhite })};
      padding: ${setRem(10)} ${setRem(13)};
      opacity: 0;
      ${setTransition()};
    }
    &:hover .price {
      opacity: 1;
    }
  }
  .room-info {
    padding: 0 ${setRem()} ${setRem()} ${setRem()};
    h4 {
      text-transform: capitalize;
      margin: ${setRem(17)} 0;
      ${setLetterSpacing()};
    }
    p {
      ${setLetterSpacing(2)};
    }
  }
  ${setTransition()};
  ${setShadow.light};
  &:hover {
    ${setShadow.dark};
  }
`;

Room.propTypes = {
  room: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  })
};

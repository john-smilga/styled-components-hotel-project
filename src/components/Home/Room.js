import React from "react";
import styled from "styled-components";
import { setRem, setLetterSpacing, setColors } from "../../utils";
import { SmallBtn } from "../Globals/Buttons";
import PropTypes from "prop-types";

const Room = ({ className, room }) => {
  const { img = "", title = "", info = "" } = room;

  return (
    <article className={className}>
      <div className="img-container">
        <img src={img} alt="single room" />
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
  background: ${setColors.mainWhite};
  margin: ${setRem(32)} 0;
  .img-container {
    img {
      width: 100%;
      display: block;
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
`;

Room.propTypes = {
  room: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired
    // price: PropTypes.number.isRequired
  })
};

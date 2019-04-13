import React from "react";
import styled from "styled-components";
import { setRem, setLetterSpacing } from "../../utils";
import { SmallBtn } from "../Globals/Buttons";
const Room = ({ className, room }) => {
  const { img, title, info } = room;
  console.log(room);

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
  margin: ${setRem(32)} 0;
  padding: ${setRem(16)};
  .img-container {
    img {
      width: 100%;
      display: block;
    }
  }
  .room-info {
    h4 {
      text-transform: capitalize;
      margin: ${setRem(17)} 0;
    }
    p {
      ${setLetterSpacing()};
    }
  }
`;

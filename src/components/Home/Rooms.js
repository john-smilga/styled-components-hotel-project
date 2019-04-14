import React, { Component } from "react";
import styled from "styled-components";
import { setColor, media, setRem } from "../../utils";
import Section from "../Globals/Section";
import Title from "../Globals/Title";
import rooms from "./rooms-data";
import Room from "./Room";
export default class Rooms extends Component {
  state = {
    rooms: rooms
  };
  render() {
    return (
      <Section color={setColor.lightGrey}>
        <Title title="our rooms" center />
        <RoomsCenter>
          {this.state.rooms.map(room => {
            return <Room key={room.id} room={room} />;
          })}
        </RoomsCenter>
      </Section>
    );
  }
}

const RoomsCenter = styled.div`
  width:90vw;
  margin: 0 auto;
  /* ${media.tablet`
display:grid;
grid-template-columns:1fr 1fr;
grid-column-gap:${setRem(32)};
`}
  ${media.large`
grid-template-columns:repeat(3,1fr);
`} */
${media.desktop`
width:100vw;
max-width:1170px;
`}
display:grid;
grid-template-columns:repeat(auto-fit,minmax(360px,1fr));
grid-column-gap:${setRem(45)};
`;

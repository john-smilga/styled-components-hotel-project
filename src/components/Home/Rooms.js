import React, { Component } from "react";
import styled from "styled-components";
import { setColors, media, setRem } from "../../utils";
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
      <Section color={setColors.lightGrey}>
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
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  ${media.phone`
display:grid;
grid-template-columns:1fr 1fr;
grid-column-gap:${setRem(32)};
`}
  ${media.desktop`
grid-template-columns:repeat(3,1fr);
`}
`;

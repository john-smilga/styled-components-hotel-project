import React from "react";
import aboutImg from "../../images/aboutBcg.jpeg";
import styled from "styled-components";
import {
  setRem,
  setBorder,
  setColor,
  setLetterSpacing,
  media
} from "../../utils";
import { PrimaryBtn } from "../Globals/Buttons";
import Section from "../Globals/Section";
import Title from "../Globals/Title";

export default function About() {
  return (
    <Section>
      <AboutCenter>
        <div className="about-img">
          <img src={aboutImg} alt="about us" />
        </div>
        <div className="about-info">
          <Title title="about us" />
          <p>
            {/* 30 */}
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
            ipsum exercitationem ad non aspernatur nesciunt. Sed nobis, beatae
            provident natus repudiandae nostrum totam voluptatibus ratione
            veritatis laboriosam eligendi accusamus perspiciatis.
          </p>
          <PrimaryBtn>read more</PrimaryBtn>
        </div>
      </AboutCenter>
    </Section>
  );
}

const AboutCenter = styled.div`
  .about-img,
  .about-info {
    padding: ${setRem(30)};
  }
  .about-img {
    img {
      width: 100%;
      display: block;
      ${setBorder({ width: setRem(6), color: setColor.primaryColor })}
    }
  }
  .about-info {
    p {
      ${setLetterSpacing(3)};
    }
  }
  width: 90vw;
  margin: 0 auto;
  ${media.desktop`
  width:100vw;
  display: grid;
  max-width: 1170px;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
    .about-img {
      align-self: center;
    }
    .about-info {
      p {
        width: 80%;
      }
    }
  `};
`;

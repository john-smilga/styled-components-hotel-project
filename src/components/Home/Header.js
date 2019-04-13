import React from "react";
import homeBcg from "../../images/homeBcg.jpeg";
import Hero from "../Globals/Hero";
import Banner from "../Globals/Banner";
import { PrimaryBtn } from "../Globals/Buttons";
export default function HeaderSection() {
  return (
    <>
      <Hero img={homeBcg}>
        <Banner
          greeting="welcome to"
          title="beachwalk resort"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro dolorem a quaerat, repellat veniam provident quo distinctio ad similique culpa."
        >
          {/* <PrimaryBtn as="a" href="https://www.google.com">
            view details
          </PrimaryBtn> */}
          <PrimaryBtn t="1rem">view details</PrimaryBtn>
        </Banner>
      </Hero>
    </>
  );
}

import React from "react";
import Navigation from "../Navigation";
import {
  Container,
  HeaderWrapper,
  TextWrapper,
  Header,
  Para,
} from "./About.elements";

const About = () => {
  return (
    <>
      <Container id="about">
        <Navigation />
        <HeaderWrapper>
          <Header>About Me</Header>
        </HeaderWrapper>
        <TextWrapper>
          <Para>
            Hello , My name is Remon Matthias , Iam a UI/UX Designer and a
            Front-End Developer , I enjoy creating visually stunning designs ,
            then , transforming these designs into real life projects using my
            development skills.
          </Para>
        </TextWrapper>
      </Container>
    </>
  );
};

export default About;

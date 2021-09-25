import React from "react";
import {
  ProjectContainer,
  Para,
  ContentWrapper,
  Img,
  Title,
  Technologies,
  Head,
  InfoWrapper,
  ButtonOne,
  ButtonTwo,
  ButtonsWrapper,
} from "./Projects.elements";

const Project = ({ id, title, para, img, technologies, link1, link2 }) => {
  return (
    <ProjectContainer id={id}>
      <ContentWrapper>
        <Img src={img} />
        <InfoWrapper>
          <Title>{title}</Title>

          <Para>{para}</Para>

          <Head>Technologies</Head>

          <Technologies>{technologies}</Technologies>

          <ButtonsWrapper>
            <ButtonOne href={link1} target="_blank">
              Live Demo
            </ButtonOne>

            <ButtonTwo href={link2} target="_blank">
              Source Code
            </ButtonTwo>
          </ButtonsWrapper>
        </InfoWrapper>
      </ContentWrapper>
    </ProjectContainer>
  );
};

export default Project;

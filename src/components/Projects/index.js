import React from "react";

import { projectOne, projectTwo, projectThree, projectFour } from "./data";
import {
  Container,
  HeaderWrapper,
  Header,
  ProjectsWrapper,
} from "./Projects.elements";
import Project from "./Project";
import Navigation from "../Navigation";

const Projects = () => {
  return (
    <Container id="projects">
      <Navigation />

      <HeaderWrapper>
        <Header>Projects</Header>
      </HeaderWrapper>

      <ProjectsWrapper>
        <Project {...projectOne} />
        <Project {...projectTwo} />
        <Project {...projectThree} />
        <Project {...projectFour} />
      </ProjectsWrapper>
    </Container>
  );
};

export default Projects;

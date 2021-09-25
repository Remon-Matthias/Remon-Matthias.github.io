import React from "react";
import Navigation from "../Navigation";
import {
  Container,
  HeaderWrapper,
  Header,
  SkillsWrapper,
  GroupWrapper,
  CategoryWrapper,
  Title,
  ListWrapper,
  ListItem,
} from "./Skills.elements";

const Skills = () => {
  return (
    <Container id="skills">
      <Navigation />
      <HeaderWrapper>
        <Header>Skills</Header>
      </HeaderWrapper>
      <SkillsWrapper>
        <GroupWrapper>
          <CategoryWrapper>
            <Title>Basic:</Title>
            <ListWrapper>
              <ListItem>> HTML</ListItem>
              <ListItem>> CSS</ListItem>
              <ListItem>> Javascript</ListItem>
            </ListWrapper>
          </CategoryWrapper>
          <CategoryWrapper>
            <Title>CSS-Preprocessor: </Title>
            <ListWrapper>
              <ListItem>> Sass</ListItem>
            </ListWrapper>
          </CategoryWrapper>
          <CategoryWrapper>
            <Title>Version Control:</Title>
            <ListWrapper>
              <ListItem>> Git / GitHub</ListItem>
            </ListWrapper>
          </CategoryWrapper>
        </GroupWrapper>
        <GroupWrapper>
          <CategoryWrapper>
            <Title>Javascript Framework:</Title>
            <ListWrapper>
              <ListItem>> React Js</ListItem>
              <ListItem>> Vue Js</ListItem>
            </ListWrapper>
          </CategoryWrapper>
          <CategoryWrapper>
            <Title>Full Stack:</Title>
            <ListWrapper>
              <ListItem>
                > MERN Stack (MongoDB , Express Js , React Js , Node Js)
              </ListItem>
            </ListWrapper>
          </CategoryWrapper>
        </GroupWrapper>

        <GroupWrapper>
          <CategoryWrapper>
            <Title>UI/Ux Design:</Title>
            <ListWrapper>
              <ListItem>> Figma</ListItem>
              <ListItem>> Research</ListItem>
              <ListItem>> Wireframing</ListItem>
              <ListItem>> Prototyping</ListItem>
            </ListWrapper>
          </CategoryWrapper>
          <CategoryWrapper>
            <Title>Mobile Development:</Title>
            <ListWrapper>
              <ListItem>> React-Native</ListItem>
            </ListWrapper>
          </CategoryWrapper>
        </GroupWrapper>
        <GroupWrapper>
          <CategoryWrapper>
            <Title>Other Skills:</Title>
            <ListWrapper>
              <ListItem>> Responisve Web Design</ListItem>
              <ListItem>> Styled-Components</ListItem>
              <ListItem>> GraphQL</ListItem>
              <ListItem>> Redux</ListItem>
              <ListItem>> Typescript</ListItem>
              <ListItem>> Gatsby Js</ListItem>
              <ListItem>> Axios</ListItem>
              <ListItem>> Firebase</ListItem>
              <ListItem>> Wordpress</ListItem>
            </ListWrapper>
          </CategoryWrapper>
        </GroupWrapper>
      </SkillsWrapper>
    </Container>
  );
};

export default Skills;

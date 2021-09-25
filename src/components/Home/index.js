import React, { useState } from "react";
import NavBar from "../NavBar";
import Sidebar from "../Sidebar";
import { BsChevronDoubleDown } from "react-icons/bs";
import {
  Container,
  TextWrapper,
  Title,
  Subtitle,
  MainWrapper,
  ButtonWrapper,
  Button,
  ButtonLink,
  BgWrapper,
  IconWrapper,
  Bg,
} from "./Home.elements";

const Home = () => {
  //sidebar function
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Container id="home">
        <Sidebar isOpen={isOpen} toggle={toggle} />

        <NavBar toggle={toggle} isOpen={isOpen} />
        <BgWrapper>
          {/* <Bg src={Video} type="video/mp4" loop muted playsInline /> */}
        </BgWrapper>

        <MainWrapper>
          <TextWrapper>
            <Title>Remon Matthias</Title>
            <Subtitle> UI/UX Designer | Front-End Developer </Subtitle>
          </TextWrapper>

          <ButtonWrapper>
            <Button>
              <ButtonLink
                href="https://github.com/RemonMatthias"
                target="_blank"
              >
                GitHub
              </ButtonLink>
            </Button>
            <Button>
              <ButtonLink
                href="https://www.behance.net/RemonMatthias"
                target="_blank"
              >
                Behance
              </ButtonLink>
            </Button>

            <Button>
              <ButtonLink
                href="https://www.linkedin.com/in/remon-matthias"
                target="_blank"
              >
                Linkedin
              </ButtonLink>
            </Button>
          </ButtonWrapper>

          <IconWrapper
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            activeClass="active"
          >
            <BsChevronDoubleDown color="#ffb566" size="2em" />
          </IconWrapper>
        </MainWrapper>
      </Container>
    </>
  );
};

export default Home;

import React from "react";
import {
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiSocialYoutubeCircular,
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { RiBehanceFill } from "react-icons/ri";

import {
  Container,
  HeaderWrapper,
  IconsWrapper,
  Icon,
  IconLink,
  TextWrapper,
  Title,
  Phone,
  Email,
  Span1,
  Span2,
  Span3,
  Span4,
} from "./Contact.elements";
import Navigation from "../Navigation";

const Contact = () => {
  return (
    <Container id="contact">
      <Navigation />
      <HeaderWrapper>
        <Title>Contact Me</Title>
      </HeaderWrapper>
      <TextWrapper>
        <Phone>
          <Span1>Phone : </Span1>
          <Span2>(+20) 01285805156</Span2>
        </Phone>
        <Email>
          <Span3>Email : </Span3>
          <Span4>remonmatthias.business@gmail.com</Span4>
        </Email>
      </TextWrapper>
      <IconsWrapper>
        <Icon>
          <IconLink
            href="https://www.facebook.com/RemonMatthias/"
            target="_blank"
          >
            <TiSocialFacebookCircular
              style={{ color: "#ffb566", fontSize: "5em" }}
            />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink href="https://twitter.com/MatthiasRemon" target="_blank">
            <TiSocialTwitterCircular
              style={{ color: "#ffb566", fontSize: "5em" }}
            />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink
            href="https://www.youtube.com/channel/UC19CnH7H3Bbg1jin5koB-wQ"
            target="_blank"
          >
            <TiSocialYoutubeCircular
              style={{
                color: "#ffb566",
                fontSize: "5em",
              }}
            />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink
            href="https://www.behance.net/RemonMatthias"
            target="_blank"
          >
            <RiBehanceFill style={{ color: "#ffb566", fontSize: "5em" }} />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink href="https://github.com/RemonMatthias" target="_blank">
            <TiSocialGithubCircular
              style={{
                color: "#ffb566",
                fontSize: "5em",
              }}
            />
          </IconLink>
        </Icon>
        <Icon>
          <IconLink
            href="https://www.linkedin.com/in/remon-matthias"
            target="_blank"
          >
            <TiSocialLinkedinCircular
              style={{ color: "#ffb566", fontSize: "5em" }}
            />
          </IconLink>
        </Icon>
      </IconsWrapper>
    </Container>
  );
};

export default Contact;

import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: transparent;
  border-bottom: 1px solid #ffb566;

  @media screen and (max-width: 1000px) {
    font-size: 0.9em;
  }
`;

export const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -2;
`;

export const Bg = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const MainWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  @media screen and (max-width: 500px) {
    margin-top: -5vh;
  }
`;

//Text
export const TextWrapper = styled.div`
  display: flex;

  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 6em;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  text-align: center;
  margin: 0 0 0.6em 0;
  z-index: 2;
  color: #fff;
`;

export const Subtitle = styled.h3`
  background-image: linear-gradient(to top, #b721ff 0%, #21d4fd 100%);
  background-color: #ff8177;

  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  font-size: 2em;
  margin-bottom: 2em;
  z-index: 2;
  color: #fff;

  @media screen and (max-width: 500px) {
    font-size: 1.5em;
  }
`;

//Buttons

export const ButtonWrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  display: flex;
  align-items: center;
  margin-top: 1em;

  @media screen and (max-width: 500px) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border-radius: 3px;
  margin-right: 1em;
  padding: 0.5em 1em;
  background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
  position: relative;
  z-index: 1;
  outline: none;
  border: none;
  font-size: 0.9em;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: #4837ff;
    transition: all 0.35s;
    border-radius: 3px;
    z-index: 2;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
  @media screen and (max-width: 500px) {
    margin-right: 0;
    font-size: 0.75em;
  }
`;

export const ButtonLink = styled.a`
  font-size: 1.5em;
  padding: 0.5em;
  cursor: pointer;
  text-decoration: none;
  color: white;
  z-index: 50;
  position: relative;

  :hover {
    color: white;
    z-index: 50;
  }
`;

export const IconWrapper = styled(LinkS)`
  position: absolute;
  bottom: 1em;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    transform: translateY(5px);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

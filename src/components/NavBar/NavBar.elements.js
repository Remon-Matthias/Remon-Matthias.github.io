import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Container = styled.nav`
  width: 10vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  z-index: 220;

  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 10vh;
    /* position: relative; */
    flex-direction: row;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  cursor: pointer;

  color: #fe5196;

  z-index: 99999999999999;
  justify-content: center;
  justify-self: center;
  margin-top: 2rem;
  padding: 0;
  @media screen and (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    font-size: 1rem;
    cursor: pointer;
    text-shadow: 0 0 5px #ffa500, 0 0 15px #ffa500, 0 0 20px #ffa500,
      0 0 40px #ffa500, 0 0 60px #ff0000, 0 0 10px #ff8d00, 0 0 98px #ff0000;
    color: #fff6a9;
    z-index: 99;
  }

  @media screen and (max-width: 500px) {
    margin: auto;
    margin-left: 0;
    justify-content: flex-end;
  }
`;

export const Menu = styled.ul`
  z-index: 1;
  display: none;
  flex-direction: column;
  margin: auto;
  height: 90%;
  width: 100%;
  padding: 0;
  text-align: center;
  list-style: none;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 500px) {
    flex-direction: row;
    margin-left: 0;
  }
`;
export const MenuItem = styled.li`
  justify-self: center;
  text-align: center;
  margin: 2em auto;
`;

export const Link = styled(LinkS)`
  cursor: pointer;
  padding: 0 0.5rem;
  background-image: linear-gradient(to top, #b721ff 0%, #21d4fd 100%);
  background-color: #ff8177;

  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  :hover {
    color: #fff;
  }

  &.active {
    color: white;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;

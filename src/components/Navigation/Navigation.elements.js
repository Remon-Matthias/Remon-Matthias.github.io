import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Container = styled.nav`
  width: 10vw;
  height: 100vh;
  left: 0;
  position: absolute;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  z-index: 220;
  background-color: #141114;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  cursor: pointer;
  color: #fe5196;
  z-index: 9999999;
  justify-content: center;
  justify-self: center;
  margin-top: 2rem;
  padding: 0;
`;

export const Menu = styled.ul`
  z-index: 1;

  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100%;
  width: 100%;
  padding: 0;
  text-align: center;
  list-style: none;
  align-items: center;
  justify-content: flex-start;
  border-right: 1px solid #ffb566;
  position: relative;
  z-index: 999;

  @media screen and (max-width: 768px) {
    display: none;
  }
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 90%;
  object-fit: cover;
  z-index: 999;
  padding-top: 0.2em;
`;
export const MenuItem = styled.li`
  justify-self: center;
  text-align: center;
  margin: 2em auto;
`;

export const Link = styled(LinkS)`
  cursor: pointer;
  padding: 0 0.5rem;
  color: #ffb566;

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

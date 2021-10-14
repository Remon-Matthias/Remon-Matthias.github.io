import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ffb566;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #ffb566;
  text-align: left;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
  } ;
`;

//header
export const Header = styled.h2`
  font-size: 3em;
  background-color: #ff8177;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  text-align: left;
  width: 100%;
  padding-left: 12vw;
  @media screen and (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`;

//projects

export const ProjectsWrapper = styled.div`
  display: grid;
  width: 88vw;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  align-items: center;
  grid-auto-flow: row;
  padding-left: 12vw;
  overflow-x: hidden;
  overflow-y: auto;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: unset;
    padding: 0;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  width: 30vw;
  height: 35vh;
  text-align: center;
  border-radius: 15px;
  overflow: hidden;
  margin: 2em;
  cursor: pointer;
  border: 1px solid #ffb566;

  :hover {
    transform: scale(1.2);
    transition: 0.3s all ease-in-out;
    z-index: 99999;
  }

  @media screen and (max-width: 768px) {
    width: 80%;

    :hover {
      transform: none;
    }
  }
`;

export const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
`;

export const InfoWrapper = styled.div`
  background: rgba(27, 26, 26, 0.9);
  transition: all 0.3s ease-out;
  transform: translateX(-100%);
  position: absolute;
  line-height: 1.9;
  color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${ContentWrapper}:hover & {
    transform: translateX(0);
  }
`;

//single project

export const Title = styled.h2`
  font-size: 2em;
  /* color: #fff6a9; */
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const Para = styled.p`
  color: white;
  margin-bottom: 1em;
`;

export const Head = styled.h4`
  color: #fff6a9;
  background-image: linear-gradient(to top, #b721ff 0%, #21d4fd 100%);
  background-color: #ff8177;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const Technologies = styled.h6`
  color: white;
  margin-bottom: 1em;
`;

export const ButtonsWrapper = styled.div`
  display: inline-block;
  width: 100%;
`;

export const ButtonOne = styled.a`
  border-right: 1px solid #cc9900;
  border-radius: 0;
  padding: 0.2em;
  transition: all 0.2s;
  background: transparent;
  text-decoration: none;
  color: #fff6a9;

  :hover {
    color: #cc9900;
  }
`;

export const ButtonTwo = styled.a`
  border-radius: 0;
  padding: 0.2em;
  transition: all 0.2s;
  background: transparent;
  text-decoration: none;
  color: #fff6a9;

  :hover {
    color: #cc9900;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;

  ${ContentWrapper}:hover & {
    transition: all 0.3s ease-out;
    transform: scale(1.2, 1.2);
  }
`;

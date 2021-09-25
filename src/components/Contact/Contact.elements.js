import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    font-size: 0.7rem;
  }
  @media screen and (max-width: 450px) {
    font-size: 0.6rem;
  }
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ffb566;
  text-align: left;
  padding: 2rem 0;

  @media screen and (max-width: 768px) {
    margin-bottom: 5rem;
  } ;
`;

export const Title = styled.h2`
  font-size: 3em;
  background-color: #ff8177;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  padding-left: 12vw;
  text-align: left;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 0;
    text-align: center;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
  text-align: left;
  margin-top: 4em;

  @media screen and (max-width: 768px) {
    text-align: center;
    margin: 0;
  }
`;
//Phone

export const Phone = styled.h4`
  color: white;
  margin-bottom: 2em;
  font-size: 2em;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
  }
`;

export const Span1 = styled.span`
  background-image: linear-gradient(to top, #b721ff 0%, #21d4fd 100%);
  background-color: #ff8177;

  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
  }
`;

export const Span2 = styled.span`
  color: white;

  @media screen and (max-width: 768px) {
  }
`;

//Email

export const Email = styled.h4`
  color: white;
  font-size: 2em;
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 450px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export const Span3 = styled.span`
  background-image: linear-gradient(to top, #b721ff 0%, #21d4fd 100%);
  background-color: #ff8177;

  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const Span4 = styled.span``;

//social Media Icons

export const IconsWrapper = styled.div`
  list-style: none;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Icon = styled.li`
  display: inline-block;
  margin: 0 1em 0 1em;

  :hover {
    transform: scale(1.2);
    transition: all 0.2s ease;
  }

  @media screen and (max-width: 500px) {
    font-size: 0.8em;
  }
`;

export const IconLink = styled.a`
  text-decoration: none;
  border-bottom: none;
  position: relative;
  transition: all 0.2s ease;
  border-radius: 100%;
  border: solid 1px rgba(255, 255, 255, 0.25);
  background-color: rgba(255, 255, 255, 0.075);

  :hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

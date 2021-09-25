import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  border-bottom: 1px solid #ffb566;
  @media screen and (max-width: 768px) {
    min-height: 100vh;
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
    text-align: center;
    padding: 0;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80%;
  width: 100%;
  text-align: center;
  line-height: 3em;

  @media screen and (max-width: 768px) {
    height: auto;
  }
`;
export const Para = styled.p`
  width: 70%;
  font-size: 1.75em;
  border: 1px solid #ffb566;
  margin-left: 10vw;
  padding: 5rem 3rem;
  color: #fff;
  text-align: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 20px;

  @media screen and (max-width: 500px) {
    font-size: 1.5em;
    text-align: center;
    padding: 0 3rem;
    margin: 0;
    width: 60%;
  }
`;

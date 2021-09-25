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
  } ;
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
    text-align: center;
  } ;
`;

export const Header = styled.h2`
  font-size: 3em;
  width: 100%;
  padding-left: 12vw;
  background-color: #ff8177;
  background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const SkillsWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  margin-left: 8rem;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  } ;
`;

export const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 80%;
  padding-right: 0.5em;
  @media screen and (max-width: 768px) {
    width: 90%;
    justify-content: center;
    align-items: center;
  } ;
`;
export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  border: 1px solid #ffb566;

  @media screen and (max-width: 768px) {
  } ;
`;
export const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  list-style: none;
  margin: 1rem 1rem;

  @media screen and (max-width: 768px) {
  } ;
`;
export const Title = styled.h3`
  margin: 1rem 1rem;
  font-size: 1.6em;
  background-image: linear-gradient(to top, #b721ff 0%, #21d4fd 100%);
  background-color: #ff8177;

  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  @media screen and (max-width: 768px) {
    text-align: left;
  } ;
`;
export const ListItem = styled.li`
  color: white;
  width: 80%;
  font-size: 1.2em;
  margin-bottom: 0.5rem;

  @media screen and (max-width: 768px) {
    text-align: left;
  } ;
`;

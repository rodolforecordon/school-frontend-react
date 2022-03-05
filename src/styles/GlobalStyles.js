import styled, { createGlobalStyle } from 'styled-components';
import { colors } from '../config/colors';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryColor};
    color: ${colors.primaryColorLight};
  }

  html,
  body,
  #root {
    height: 100%;
  }

  button {
    all: unset;
    display: reverse;
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    font-weight: 700;
  }
  button:hover {
    background: ${colors.pink};
    text-shadow: 0 0 10px ${colors.primaryColor};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

export const Container = styled.section`
  max-width: 360px;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background: ${colors.secondaryColor};
`;

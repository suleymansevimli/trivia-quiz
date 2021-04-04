import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`

  html {
    display: flex;
    height: 100%;
  }

  body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: #eee;
  }

  button {
    height: 50px;
    border: none;
    background: #ff7f50;
    cursor: pointer;
    border-radius:4px;

    :hover {
      background: rgba(255,127,80,.5);
    }
  }

`
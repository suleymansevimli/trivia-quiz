import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  max-height: 500px;
  border-radius: 4px; 
  box-sizing: border-box;
  padding: 40px;

  h2 {
    margin-bottom: 40px;
    font-size: 32px;
  }

  input {
    height: 50px;
    width: 90%;
    color: #000;
    padding: 10px;
    font-size: 24px;
    text-align: center;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: 1px solid #eee;
    transition: ease-in-out box-shadow 300ms;

    :focus {
      outline: none;
      box-shadow: 0 0 30px rgba(0, 0, 0, .5);
    }
  }

  button {
    background: black;
    border: none;
    color: #fff;
    padding: 10px 20px;
    margin: 30px 0;
    cursor: pointer;
    border-radius: 4px;
    font-size: 24px;

    :hover {
      background: rgba(0, 0, 0, .7);
    }
  }
`

export const QuizContainer = styled.div`
  min-width: 750px;
  min-height: 500px;
  box-shadow: 0 0 30px rgba(0, 0, 0, .2);
  padding: 30px 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .header {
    display: flex;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 24px;
      display: inline-block;
      letter-spacing: 3px;
      font-weight: bold;
    }
    
    .nick {
      font-style: italic;
      text-transform: uppercase;
    }
  }

  .question-card {
    flex: 1;
    p {
      text-align: center;
      font-size: 24px;
    }
  }

  .answers {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;


    .default {
      height: 50px;
      width: 50%;
      border: none;
      background: #ff7f50;
      cursor: pointer;
      border-radius:4px;
      
    }
    
    .correct {
      background: green;
    }
  }
  
  .next-questions {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    
    button {
      background: wheat;
      width: 200px;
      cursor: pointer;
      
      :focus {
        outline: 0;
      }
    }
  }
`
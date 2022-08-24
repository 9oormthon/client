import { createGlobalStyle } from 'styled-components';

import Normalize from './Normalize';

const GlobalStyle = createGlobalStyle`
  ${Normalize}

  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    text-decoration: none;
    font-family:  'Pretendard Variable';
  }

  *::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }

  body{
    overflow-x:hidden;
    font-family:  'Pretendard Variable';
  }
  
  ol, ul,li {
  padding: 0;
	list-style: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    :focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;

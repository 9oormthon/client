import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'BMDOHYEON';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/BMDOHYEON.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

  ${reset}
  * {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    box-sizing: border-box;
    text-decoration: none;
    color: #000000;
    font-family: 'BMDOHYEON';
  }
  *::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  body{
    overflow-x:hidden;
    font-family: 'BMDOHYEON';
  }
  ol, ul,li {
	list-style: none;
}
`;

export default GlobalStyle;

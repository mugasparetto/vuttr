import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', Helvetic, sans-serif;
    background: #f0f0f0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }

  html, body, #root {
    height: 100%;
  }

  h1 {
    font-weight: 300;
    font-size: 3.25rem;
    line-height: 4rem;
    letter-spacing: 0.2px;
  }

  h2 {
    font-weight: 500;
    font-size: 2.75rem;
    line-height: 3.375rem;
  }

  h3 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.625rem;
    letter-spacing: 0.1px;
  }

  h4 {
    font-weight: 500;
    font-size: 1.625rem;
    line-height: 2rem;
    letter-spacing: 0.2px;
  }

  h5 {
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.625rem;
    letter-spacing: 0.2px;
  }

  p {
    line-height: 1.5rem;
  }

  a {
    color:inherit;
  }

`;

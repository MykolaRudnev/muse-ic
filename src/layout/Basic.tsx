import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`@font-face {
  
  
}

  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    overflow-x: hidden;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }


  body {
    font-family: 'Poppins',sans-serif;
    font-size:18px;
    height: 100%;
    margin: 0;
    padding: 0;
    line-height: normal;
    background: #ffffff;
    color: #999FAE;
    -webkit-font-smoothing: antialiased;
  }

  button {
    font-family: 'Poppins',sans-serif;

  }
  #root {
    overflow: auto;
  }
  
`;

const BasicLayout = ({children}: { children: any }) => {
    return (
        <>
            <GlobalStyle/>
            {children}
        </>
    );
};

export default BasicLayout;

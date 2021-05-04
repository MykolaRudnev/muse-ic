import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  
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
  :root {
    --white:#FFFFFF;
    --text-black:#292930;
    --purple: #5956E9;
    --text-gray:#999FAE;
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

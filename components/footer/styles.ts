import styled from "styled-components";

export const ContainerFooter = styled.footer`
  max-width: 1040px;
  margin: auto;
`
export const MainContenFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  font-size: 16px;

  p {
    margin-top: 0;
    margin-bottom: 42px;
  }

  ul {
    text-decoration: unset;
    list-style-type: none;
    color: var(--text-black);
    padding: 0;
  }

  li {
    line-height: 40px;
  }
`
export const ProjectByBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`
export const ScrollBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`



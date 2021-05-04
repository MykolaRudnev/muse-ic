import styled from "styled-components";

export const PageHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 70px;

  margin: 0 110px;
  justify-content: space-between
`
export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  align-content: baseline;
  margin-right: 49px;

  span {
    color: #292930;
    font-weight: 600;
    font-size: 28px;
    padding-left: 12px;
  }

`
export const ContenHeader = styled.div`
  display: flex;
  background: white;
  position: relative;
  z-index: 100;
  border-radius: 20px;
`
export const WrapperNav = styled.div`
  width: 388px;

  ul {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px;
    list-style: none;
  }
`
export const WrapperAction = styled.div`
  position: relative;
  z-index: 100;
`

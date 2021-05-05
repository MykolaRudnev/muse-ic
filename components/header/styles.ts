import styled from "styled-components";
import {media} from "layout/theme";

export const PageHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 70px;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1220px;
  margin: auto;

  ${media.down("xl")} {
    margin: 0 16px;
  }
`
export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  align-content: baseline;
  margin-right: 49px;

  ${media.down("xl")} {
    margin-bottom: 16px;
  }

  span {
    color: #292930;
    font-weight: 600;
    font-size: 28px;
    padding-left: 12px;
  }

`
export const ContenHeader = styled.div`
  display: flex;
  position: relative;
  z-index: 100;
  flex-wrap: wrap;

  ${media.down("xl")} {
    margin-bottom: 16px;
  }
`
export const WrapperNav = styled.div`
  width: 388px;
  background: var(--white);
  border-radius: 20px;
  padding: 0 10px;

  ul {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px;
    list-style: none;
  }

  li {
    border-bottom: 2px solid transparent;
    padding-bottom: 2px;

    &:hover {
      cursor: pointer;
      border-bottom: 2px solid #999FAE;
    }
  }

  svg {
    margin-left: 14px;
  }

  ${media.down("xl")} {
    width: 100%;
  }
`
export const WrapperAction = styled.div`
  position: relative;
  z-index: 100;

  display: flex;
  justify-content: flex-end;

  ${media.down("lg")} {
    width: 100%;
  }
`

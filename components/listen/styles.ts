import styled from "styled-components";
import HeroImg from "../../images/HeroImage.png";

export const ContainerListen = styled.div`
  height: 1024px;

  &:after {
    content: url("${HeroImg}");
    display: block;
    position: absolute;
    top: 114px;
    right: 0;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
  }
`

export const WrapperContentListen = styled.div`
  max-width: 378px;
  margin-left: 14vw;
  position: relative;
  z-index: 100;

  h1 {
    font-size: 96px;
    line-height: 99.33%;
    letter-spacing: -0.025em;
    color: var(--text-black);

  }
`
export const WrapperActionListen = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: unset;
  }

  svg {
    margin-right: 16px;
  }
`
export const WrapperScroll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 100px;
  width: 100%;
  max-width: 160px;
  font-size: 16px;
`

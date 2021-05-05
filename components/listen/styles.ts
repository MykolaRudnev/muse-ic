import styled from "styled-components";
import HeroImg from "../../images/HeroImage.png";
import {media} from "layout/theme";

export const ContainerListen = styled.div`
  height: 100%;
  max-width: 1440px;
  margin: 105px auto auto;

  &:after {
    content: url("${HeroImg}");
    display: block;
    position: absolute;
    top: 114px;
    right: 0;
    z-index: 10;
  }

  img {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  
  
  ${media.down("xl")} {
    height: 100%;
    margin: 46px auto auto;
    &:after {
      margin-bottom: 16px;
      background-image: url("${HeroImg}");
      background-repeat: no-repeat;
      background-size: cover;

      position: absolute;
      top: 300px;
      right: 0;

      display: inline-block;
      width: 80%;
      height: 70%;
      content: "";
    }

    img {
      top: 0;
      width: 100%;
      height: 100%;
    }
    ${media.down("md")} {
      &:after {
        height: 55%;
      }
    }
  }
`

export const WrapperContentListen = styled.div`
  max-width: 378px;
  margin-left: 200px;
  position: relative;
  z-index: 100;

  h1 {
    font-family: "DM Sans" ,sans-serif;
    font-size:  96px;
    line-height: 99.33%;
    letter-spacing: -0.025em;
    color: var(--text-black);
    margin: 0;
  }

  ${media.down("xl")} {
    margin-left: 5vw;

    h1 {
      font-size:60px;
      width: 30%;
    }

    p {
      width: 40%;
    }
  }

`
export const WrapperActionListen = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  a {
    text-decoration: unset;
  }

  svg {
    margin-right: 16px;
  }

  ${media.down("xl")} {
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
    button {
      margin-bottom: 8px;
    }
  }

`
export const WrapperScroll = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 99px;
  margin-bottom: 100px;
  width: 100%;
  max-width: 160px;
  font-size: min(max(14px, 4vw), 16px);
`

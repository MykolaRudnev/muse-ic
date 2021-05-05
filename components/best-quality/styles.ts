import styled from "styled-components";
import Img from "../../images/dark-background.png";
import {media} from "layout/theme";

export const ContainerBestQuality = styled.div`
  background: url("${Img}");
  background-size: cover;
  min-height: 1120px;
  height: 100%;
  position: relative;
`
export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-left: 14%;
  padding-top: 150px;

  ${media.down("md")} {
    margin-left: 0;
    padding-top: 40px;
  }
`
export const TopContentFirsRow = styled.div`
  color: var(--white);

  p {
    font-family: "DM Sans", sans-serif;
    margin: 9px 0 0;
    font-weight: bold;
    font-size: min(max(18px, 4vw), 20px);
    line-height: 99.33%;
  }
`
export const TopContentSecondRow = styled.div`
  margin-left: 114px;

  h2 {
    margin-top: 0;
    max-width: 772px;
    color: var(--white);
    font-family: "DM Sans", sans-serif;
    font-weight: 500;
    font-size: 80px;
    line-height: 100%;
    margin-bottom: 48px;
    letter-spacing: -0.025em;
  }

  p {
    max-width: 499px;
    font-size: 18px;
    line-height: 27px;
    opacity: 0.5;
    margin: 0 0 45px;
  }
  ${media.down("xl")} {
    margin-left: 40px;
  }
  ${media.down("md")} {
    margin-left: 6px;

    h2 {
      font-size: 40px;
    }
  }
`
export const ContentBestQuality = styled.div`
  max-width: 1440px;
  margin: auto;
  position: relative;

  ${media.down("md")} {
    padding: 0 16px;
  }
`

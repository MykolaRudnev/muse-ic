import styled from "styled-components";
import Img from "../../images/dark-background.png";

export const ContainerBestQuality = styled.div`
  background: url("${Img}");
  background-size: cover;
  height: 1098px;
  position: relative;
`
export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  margin-left: 200px;
  padding-top: 150px;
`
export const TopContentFirsRow = styled.div`
  color: var(--white);

  p {
    font-family: "DM Sans", sans-serif;
    margin: 0;
    margin-top: 9px;
    font-weight: bold;
    font-size: 20px;
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
  }

  p {
    max-width: 499px;
    font-size: 18px;
    line-height: 27px;
    opacity: 0.5;
  }
`
export const ContentBestQuality = styled.div`
  max-width: 1440px;
  margin: auto;
  position: relative;
`

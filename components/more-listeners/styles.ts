import styled from "styled-components";
import Img from "../../images/background-bottom.png";
import {TopContent, TopContentSecondRow} from "components/best-quality/styles";
import {media} from "layout/theme";

export const ContainerMoreListeners = styled.div`
  background: url("${Img}"), no-repeat;
  background-size: cover;
  min-height: 663px;
  height: 100%;
  position: relative;
`
export const TopContentMoreListeners = styled(TopContent)`
  padding-top: 112px;
`
export const TopContentSecondRowMoreListeners = styled(TopContentSecondRow)`
  h2 {
    max-width: 772px;
    margin-bottom: 50px;
  }
`

export const WrapperLogos = styled.div`
  max-width: 1060px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 60px auto auto;

  ${media.down("md")} {
    padding: 0 16px;

    img {
      width: 100%;
    }
  }

`

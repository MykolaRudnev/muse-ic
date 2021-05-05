import styled from "styled-components";
import ArrowRight from "../../../../images/right-arrow.png";
import ArrowLeft from "../../../../images/left-arrow.png";
import {media} from "layout/theme";

export const WrapperSlider = styled.div`
  width: 100%;
  padding-left: 470px;
  margin-bottom: 5rem;
  position: relative;

  &:after {
    position: absolute;
    background: linear-gradient(90deg, #27272E 78.53%, rgba(39, 39, 46, 0) 100%);
    width: 100%;
    height: 100%;
    max-width: 469px;
    max-height: 585px;
    content: "";
    bottom: 61px;
    left: 60px;
    z-index: 10;
  }

  ${media.down("xl")} {
    padding-left: 300px;

    &:after {
      max-width: 300px;
      left: 30px;
      bottom: 0;
    }

  }

  ${media.down("md")} {

    padding-left: 0;

    &:after {
      content: unset;
    }

    .slick-prev, .slick-next {
      bottom: -10%;
      top: unset;
    }
  }
`

export const CardOfAlbum = styled.div`
  min-height: 636px;
  max-height: 636px;

  img {
    cursor: pointer;
    width: 242px;
    height: 242px;
    filter: drop-shadow(0px 25px 10px #18181D);
    border-radius: 20px;
    margin-bottom: 22px;
  }

  outline: none;

  .collection-name {
    color: var(--white);
    max-width: 320px;
  }

  .collection-name, .artist-name {
    font-family: 'DM Sans', sans-serif;
    font-size: 24px;
    line-height: 140%;
    margin: 0;
  }

  .artist-name {
    color: #E7444F;
  }

  .description-album {
    max-width: 320px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.025em;
    opacity: 0.5;
  }

  .genre-date {
    font-weight: 500;
    font-size: 12px;
    line-height: 24px;
    margin-top: 10px;
    text-transform: uppercase;
  }

  .see-more {
    margin-top: 14px;
    margin-bottom: 0;
    color: var(--purple);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.04em;
    opacity: 1;
  }

  ${media.down("xl")} {
    min-height: 100%;
    max-height: 100%;
  }
`

export const NextArrow = styled.div`

  left: -188px;
  z-index: 20;

  &:before {
    font-size: 40px;
    content: url("${ArrowRight}");
    color: var(--purple);
    opacity: 1;

  }

  ${media.down("md")} { {

    left: 60%;

    &:before {
      display: none;
    }
  }
  }

`
export const PrevArrow = styled.div`

  left: -240px;
  z-index: 20;

  &:before {
    font-size: 40px;
    content: url("${ArrowLeft}");
    opacity: 1;

  }

  ${media.down("md")} { {

    left: 30%;

    &:before {
      display: none;
    }
  }
  }
`
export const QuantityWrapper = styled.div`
  width: 100%;
  max-width: 136px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  bottom: 360px;
  left: 212px;
  position: absolute;
  z-index: 20;

  ${media.down("xl")} {
    bottom: 300px;
    left: 40px;
  }

  ${media.down("md")} {
    bottom: -2%;
    left: 33%;
  }
`

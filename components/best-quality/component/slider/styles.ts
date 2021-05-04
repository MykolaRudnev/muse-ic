import styled from "styled-components";
import ArrowRight from "../../../../images/right-arrow.png";
import ArrowLeft from "../../../../images/left-arrow.png";

export const WrapperSlider = styled.div`
  width: 100%;
  padding-left: 470px;
  margin-bottom: 5rem;
  background: linear-gradient(90deg, #27272E 78.53%, rgba(39, 39, 46, 0) 100%);
`

export const CardOfAlbum = styled.div`
  img {
    width: 242px;
    height: 242px;
    filter: drop-shadow(0px 25px 10px #18181D);
    border-radius: 20px;
    margin-bottom: 22px;
  }

  outline:none;
  .collection-name {
    color: var(--white);
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

  .genre-date {

  }
`

export const NextArrow = styled.div`

  left: -188px;

  &:before {
    font-size: 40px;
    content: url("${ArrowRight}");
    color: var(--purple);
    opacity: 1;
  }


`
export const PrevArrow = styled.div`

  left: -240px;

  &:before {
    font-size: 40px;
    content: url("${ArrowLeft}");
    opacity: 1;
  }
`
export const QuantityWrapper = styled.div`
  width: 100%;
  max-width: 136px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  bottom: 304px;
  left: 212px;
  position: absolute;
`

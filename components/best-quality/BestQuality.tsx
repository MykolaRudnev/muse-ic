import styled from "styled-components";
import Img from 'assets/images/dark-background.png'
import {SliderAlbum} from "./SliderAlbum";



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
    font-family: "DM Sans",sans-serif;
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
    font-family: "DM Sans",sans-serif;
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


// @ts-ignore
export const BestQuality = ({music}) => {
    return (
        <>
            <ContainerBestQuality>
                <TopContent>
                    <TopContentFirsRow>
                        <p>Top notch sound</p>
                    </TopContentFirsRow>
                    <TopContentSecondRow>
                        <h2>The world’s best quality audio ever.</h2>
                        <p>Over 100 years of research has led us to develop new quality, which is 100x times better than FLAC.</p>
                    </TopContentSecondRow>
                </TopContent>
                <SliderAlbum music={music}/>
            </ContainerBestQuality>

        </>
    )
}

import styled from "styled-components";
import Img from "../../images/background-bottom.png";
import {ContentBestQuality, TopContent, TopContentFirsRow, TopContentSecondRow} from "../best-quality/styles";
import {media} from "../../layout/theme";

import Image from 'next/image'

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

export const WrapperLogo = styled.div`
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
export const MoreListeners = () => {
    return (
        <>
            <ContainerMoreListeners>
                <ContentBestQuality>
                    <TopContentMoreListeners>
                        <TopContentFirsRow>
                            <p>Global trust</p>
                        </TopContentFirsRow>
                        <TopContentSecondRowMoreListeners>
                            <h2>More than 68,219 listeners use Muse.ic</h2>
                            <p>Listen what do you want. In the highest quality possible.</p>
                        </TopContentSecondRowMoreListeners>
                    </TopContentMoreListeners>
                </ContentBestQuality>
                <WrapperLogo>
                    <Image
                        src="/logo1.png"
                        alt="Picture of the author"
                        width={230}
                        height={133}
                    />
                    <Image
                        src="/logo2.png"
                        alt="Picture of the author"
                        width={230}
                        height={133}
                    />
                    <Image
                        src="/logo3.png"
                        alt="Picture of the author"
                        width={365}
                        height={170}
                    />
                    <Image
                        src="/logo4.png"
                        alt="Bowie logo"
                        width={230}
                        height={133}
                    />
                </WrapperLogo>
            </ContainerMoreListeners>

        </>
    )
}

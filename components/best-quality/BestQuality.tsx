import {SliderAlbum} from "./component/slider/SliderAlbum";
import { ContentBestQuality, TopContent, TopContentFirsRow, TopContentSecondRow } from "./styles";
import { ContainerBestQuality } from "./styles";


// @ts-ignore
export const BestQuality = ({albums}) => {
    return (
        <>
            <ContainerBestQuality>
                <ContentBestQuality>
                    <TopContent>
                        <TopContentFirsRow>
                            <p>Top notch sound</p>
                        </TopContentFirsRow>
                        <TopContentSecondRow>
                            <h2>The world’s best quality audio ever.</h2>
                            <p>Over 100 years of research has led us to develop new quality, which is 100x times better than FLAC.</p>
                        </TopContentSecondRow>
                    </TopContent>
                    <SliderAlbum albums={albums}/>
                </ContentBestQuality>
            </ContainerBestQuality>

        </>
    )
}

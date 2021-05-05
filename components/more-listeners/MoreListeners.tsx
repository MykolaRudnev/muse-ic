import Image from 'next/image'
import {ContentBestQuality, TopContentFirsRow} from "components/best-quality/styles";
import {ContainerMoreListeners, TopContentMoreListeners, TopContentSecondRowMoreListeners, WrapperLogos} from "./styles";


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
                <WrapperLogos>
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
                </WrapperLogos>
            </ContainerMoreListeners>
        </>
    )
}

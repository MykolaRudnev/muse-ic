import IconVideo from '../../images/video-playlist.svg'
import Img from '../../images/Circle.png'
import ScrollIcon from '../../images/scroll-horitontal.svg'
import {MSButton} from "../content/ms-button";
import { ContainerListen, WrapperContentListen, WrapperActionListen, WrapperScroll } from "./styles";

export const Listen = () => {

    return (
        <>
            <ContainerListen>
                <img src={Img}/>
                <WrapperContentListen>
                    <h1>Listen Like Never Before.</h1>
                    <p>We offer albums in 100x better quality than our competitors. Say good bye to FLAC 👋</p>
                    <WrapperActionListen>
                        <MSButton buttonStyle={"purple"} text='Get Started'/>
                        <div>
                            <IconVideo/>
                            <a href="#">See It In Action!</a>
                        </div>
                    </WrapperActionListen>
                    <WrapperScroll>
                        <ScrollIcon/>
                        <p>Scroll to explore</p>
                    </WrapperScroll>
                </WrapperContentListen>

            </ContainerListen>

        </>
    )
}

import styled from "styled-components";
import Img from '../assets/images/Circle.png'

export const ContainerListen = styled.div`
  height: 1220px;
  img {
    position: absolute;
    top: 0;
    right: 0;
  }
`

export const WrapperContent = styled.div `

`

export const Listen  = () => {

    return(
        <>
            <ContainerListen >
                <img src={Img} />
                <h1>Listen  Like  Never  Before.</h1>
            </ContainerListen>

        </>
    )
}

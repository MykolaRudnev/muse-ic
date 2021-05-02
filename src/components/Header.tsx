import styled from "styled-components";

import Logo from '../assets/images/Logo.svg'
import {MSButton} from "./content/ms-button";

export const PageHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 70px;
  width: 100%;
  margin: 0 110px;
`
export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  align-content: baseline;
  margin-right: 49px;

  span {
    color: #292930;
    font-weight: 600;
    font-size: 28px;
    padding-left: 12px;
  }

`
export const WrapperNav = styled.div`
  max-width: 388px;
  width: 100%;

  ul {
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: 0px;
    list-style: none;
    max-width: 388px;
  }
`
export const WrapperAction = styled.div`
`

export const Header = () => {
    return (
        <>
            <PageHeader>
                <WrapperLogo>
                    <Logo/>
                    <span> Muse.ic</span>
                </WrapperLogo>
                <WrapperNav>
                    <nav>
                        <ul>
                            <li>
                                Features
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Library
                            </li>
                            <li>
                                Explore
                            </li>
                        </ul>
                    </nav>
                </WrapperNav>
                <WrapperAction>
                    <MSButton buttonStyle="white" text='Get Started'></MSButton>
                </WrapperAction>
            </PageHeader>

        </>
    )
}

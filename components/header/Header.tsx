import Logo from '../../images/Logo.svg'
import DownArrow from '../../images/arrow-stroke.svg'
import {MSButton} from "../content/ms-button";
import {PageHeader,ContenHeader,WrapperLogo,WrapperNav, WrapperAction} from './styles'

export const Header = () => {
    return (
        <>
            <PageHeader>
                <ContenHeader>
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
                                    Explore<DownArrow/>
                                </li>
                            </ul>
                        </nav>
                    </WrapperNav>
                </ContenHeader>

                <WrapperAction>
                    <MSButton buttonStyle="white" text='Get Started'></MSButton>
                </WrapperAction>
            </PageHeader>

        </>
    )
}

import { WrapperLogo } from "components/header/styles";
import React from "react";
import Logo from "../../images/Logo.svg";

import ScrollIcon from "../../images/scroll-horitontal.svg";
import { ContainerFooter, MainContenFooter, ProjectByBox, ScrollBox } from "./styles";



const scrollTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
};

export const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <>
            <ContainerFooter>
                <MainContenFooter>
                    <WrapperLogo>
                        <Logo/>
                        <span> Muse.ic</span>
                    </WrapperLogo>
                    <div>
                        <p>Company</p>
                        <ul>
                            <li>About us</li>
                            <li>Jobs</li>
                            <li>Press</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div>
                        <p>Support</p>
                        <ul>
                            <li>Contact us</li>
                            <li>Cookies</li>
                            <li>Privacy & terms</li>
                            <li>Sitemap</li>
                        </ul>
                    </div>
                    <div>
                        <p>Community</p>
                        <ul>
                            <li>albumsians</li>
                            <li>Bands</li>
                            <li>Forum</li>
                            <li>Social Media</li>
                        </ul>
                    </div>
                </MainContenFooter>
                <ProjectByBox>
                    <p>© {getCurrentYear()} Lorem ipsum inc.</p>
                    <ScrollBox onClick={scrollTop}>
                        <ScrollIcon/>
                        <p>Back to top</p>
                    </ScrollBox>

                </ProjectByBox>
            </ContainerFooter>


        </>
    )

}

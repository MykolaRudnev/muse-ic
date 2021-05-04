import styled from "styled-components";
import Logo from "../../assets/images/Logo.svg";
import {WrapperLogo} from "../Header";
import ScrollIcon from "../../assets/images/scroll-horitontal.svg";


export const ContainerFooter = styled.footer`
  max-width: 1040px;
  margin: auto;
`
export const MainContenFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: baseline;
  font-size: 16px;

  p {
    margin-top: 0;
    margin-bottom: 42px;
  }

  ul {
    text-decoration: unset;
    list-style-type: none;
    color: var(--text-black);
    padding: 0;
  }

  li {
    line-height: 40px;
  }
`
export const ProjectByBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`
export const ScrollBox = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
`

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
                            <li>Musicians</li>
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

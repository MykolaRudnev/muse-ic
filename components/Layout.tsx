import {ReactNode} from "react";
import {Header} from "components/Header";
import {Footer} from "./footer/Footer";
interface IProps {
    children: ReactNode;
    // any other props that come into the component
}

const Layout = ({children}: IProps) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>

            <Footer />
        </>
    )
}
export default Layout

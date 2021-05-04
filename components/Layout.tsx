import {ReactNode} from "react";
import Footer from "./footer";
import Header from "./header";
interface IProps {
    children: ReactNode;
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

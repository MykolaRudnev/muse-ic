import {ReactNode} from "react";
import {Header} from "components/Header";
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

        </>
    )
}
export default Layout

import { Outlet } from "react-router";
import type { PropsWithChildren } from "react";
import NavBar from "@root/shared/Navbar";

const HomeLayout = ({children}: PropsWithChildren) => {
    return(
        <>
            <NavBar />
            <header>
            </header>
            {children || <Outlet />}
            
            <footer>
                <a href='https://nitelogdev.discloud.app/apidoc/index.html'>Swagger</a>
            </footer>
        </>
    )
}

export default HomeLayout;
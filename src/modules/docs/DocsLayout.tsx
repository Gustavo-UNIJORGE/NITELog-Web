import type { PropsWithChildren } from "react";
import { Outlet } from "react-router";

const DocsLayout = ({ children }: PropsWithChildren) => {
    return(
        <>
            {children || <Outlet />}
        </>
    )
}

export default DocsLayout;
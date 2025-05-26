import type { PropsWithChildren } from "react";
import { Outlet } from "react-router";
import '../assets/styles/AuthStyles.css'

const AuthLayout = ({ children }: PropsWithChildren) => {
    return(
        <>
            <main>
                <div className="tituloForms">
                    <div className="acessarPortal">Acessar o Portal</div>
                    {/* <div className="texto">Insira seus dados</div> */}
                </div>
                {children || <Outlet />}
            </main>
        </>
    )
}

export default AuthLayout;
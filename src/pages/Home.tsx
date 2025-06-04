import { Link } from "react-router";
import routes from "@routes";

const Home = () => {
    return(
        <>
            <h1>Página Inicial</h1>
            <div className="nav">
                <Link to={routes.LOGIN}>Login</Link>
                <Link to={routes.QRCODE}>Código QR</Link>
            </div>
            <footer>
                <a href='https://nitelogdev.discloud.app/apidoc/index.html'>Documentação</a>
            </footer>
        </>
    )
}

export default Home;
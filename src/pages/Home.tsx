import { Link } from "react-router";
import routes from "@routes";

const Home = () => {
    return(
        <div className="home side-nav">
            <h1>Página Inicial</h1>
            <div className="nav">
                <Link to={routes.AUTH.LOGIN}>Login</Link>
                <Link to={routes.QRCODE}>Código QR</Link>
                <Link to={routes.DOCS}>Documentação</Link>
                <Link to='https://nitelogdev.discloud.app/apidoc/index.html'>
                    Swagger
                </Link>
            </div>
        </div>
    )
}

export default Home;
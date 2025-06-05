import { Link } from "react-router";
import routes from "@routes";

const Home = () => {
    return(
        <>
            <h1>Página Inicial</h1>
            <p>Bem vindo ao NiteLog</p>
            <div className="nav">
                <Link to={routes.LOGIN}>Login</Link>
                <Link to={routes.QRCODE}>Código QR</Link>
                <Link to={routes.DOCS}>Documentação</Link>
            </div>
        </>
    )
}

export default Home;
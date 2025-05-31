import { Link } from "react-router";

const Home= ({ }) => {
    return(
        <>
            <h1>Página Inicial</h1>
            <Link to="login">Login</Link>
            <footer>
                <a href='https://nitelogdev.discloud.app/apidoc/index.html'>Documentação</a>
            </footer>
        </>
    )
}

export default Home;
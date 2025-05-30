import { Link } from "react-router";

const Home= ({ }) => {
    return(
        <>
            <h1>Página Inicial</h1>
            <Link to="login">Login</Link>
            <footer>
                <a href='https://nitelogdev.discloud.app/swagger/index.html'>Documentação</a>
            </footer>
        </>
    )
}

export default Home;
import { Link } from "react-router";

const Home= ({ }) => {
    return(
        <>
            <h1>Página Inicial</h1>
            <Link to="login">Login</Link>
        </>
    )
}

export default Home;
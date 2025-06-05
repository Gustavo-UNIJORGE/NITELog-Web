import { Link } from "react-router";
import niteImg from '../../assets/imagens/nite_6.png';


const Home = ({ }) => {
    return (
        <body className="bodyHome">
            <div>

                <div className="loginPosicao">
                    <Link to="login" className="login">Login</Link>
                </div>

                <footer>
                    <a href='https://nitelogdev.discloud.app/swagger/index.html'>Documentação</a>
                </footer>

                <div>
                    <img src={niteImg} alt="Logo Nite" style={{ width: '200px' }} />
                </div>
            </div>
        </body>
    )
}

export default Home;
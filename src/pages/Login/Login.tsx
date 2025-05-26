import {onChangeEmail, onChangePassword} from "./Script";
import { Link } from 'react-router';
import '../../assets/styles/Login.css'

const Login = ({ }) => {
    return (
        <form className="forms">

            <div className="tituloForms">
                <div className="acessarPortal">Acessar o Portal</div>
                <div className="texto">Bem-Vindo de volta</div>
            </div>

            <div>
                <div><label>Email</label></div>
                <input type="email" onInput={onChangeEmail} name="email" id="email" placeholder="Digite seu email" className="campoEmail" />
                <div className="error" id="email-invalid-error">Email inválido</div>
                <div className="error" id="email-required-error">Campo obrigatório</div>
            </div>


            <div>
                
                <div className="labelSenha"><label>Senha</label></div>
                <input type="password" id="password" name="senha" onInput={onChangePassword} placeholder="Digite sua senha" className="campoSenha" />
                <div className="error" id="password-required-error">Campo obrigatório</div>
                <div className="esqueciSenhaPosicao">
                    <button type="button" className="esqueciSenha" id="recover-password-button"  disabled={true}>Esqueceu a senha?</button>
                </div>
                
            </div>


            <div>
                <button type="button" className="entrar" id="login-button" disabled={true}>Entrar</button>
            </div>

            <div className="register">
                
                <span>Não tem uma conta?</span>
                <Link to="/register" className="fazerCadastro">Fazer cadastro</Link>
            </div>

        </form>
    )
}

export default Login;


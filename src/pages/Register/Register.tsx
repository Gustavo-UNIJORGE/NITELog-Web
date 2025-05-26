import {onChangeName, onChangeConfirmPassword} from './ScriptRegister';
import {onChangeEmail, onChangePassword} from "../Login/Script";
import { Link } from 'react-router';

const Register = ({ }) => {
    return (
        <form className="forms">

            <div>
                <div><label>Nome completo</label></div>
                <input type="text" name="name" id="name" onInput={onChangeName} placeholder="Digite seu nome" className="campoNome" />
                <div className="error" id="name-required-error">Campo obrigatório</div>
            </div>



            <div>
                <div className="labelCadastrarEmail"><label>Email</label></div>
                <input type="email" name="email" onInput={onChangeEmail} id="email" placeholder="Digite seu email" className="campoEmail" />
                <div className="error" id="email-invalid-error">Email inválido</div>
                <div className="error" id="email-required-error">Campo obrigatório</div>
            </div>


            <div>
                <div className="labelCadastrarSenha"><label>Senha</label></div>
                <input type="password" id="password" onInput={onChangePassword} name="senha" placeholder="Digite sua senha" className="campoSenha" />
                <div className="error" id="password-required-error">Campo obrigatório</div>
            </div>

            <div>
                <div className="labelConfirmeSenha"><label>Confirme sua senha</label></div>
                <input type="password" id="confirmPassword" onInput={onChangeConfirmPassword} name="confirmeSenha" placeholder="Digite sua senha" className="campoSenha" />
                <div className="error" id="confirmPassword-required-error">Campo obrigatório</div>
                <div className="error" id="confirmPassword-invalid-error">Senha inválida</div>
            </div>

            <div className="register">
                <Link to="/home" className="Cadastrar">Cadastrar</Link>
            </div>

        </form>
    )
}

export default Register;
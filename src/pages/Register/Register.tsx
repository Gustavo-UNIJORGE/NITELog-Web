import {onChangeName, onChangeConfirmPassword} from './ScriptRegister';
import {onChangeEmail, onChangePassword} from "../Login/Script";

const Register = ({ }) => {

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Usuário logado: ');
    }

    return (
        <form className="forms" onSubmit={handleFormSubmit}>

            <div>
                <label>Nome completo</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onInput={onChangeName} 
                    placeholder="Digite seu nome" 
                    className="campoNome" 
                />
                <div 
                    className="error" 
                    id="name-required-error">
                        Campo obrigatório
                </div>
            </div>



            <div>
                <label className="labelCadastrarEmail">
                    Email
                </label>
                <input 
                    type="email" 
                    name="email" 
                    onInput={onChangeEmail} 
                    id="email" 
                    placeholder="Digite seu email" 
                    className="campoEmail" />
                <div 
                    className="error" 
                    id="email-invalid-error">
                        Email inválido
                </div>
                <div 
                    className="error" 
                    id="email-required-error">
                        Campo obrigatório
                </div>
            </div>


            <div>
                <label className="labelCadastrarSenha">
                    Senha
                </label>
                <input 
                    type="password" 
                    id="password" 
                    onInput={onChangePassword} 
                    name="senha" 
                    placeholder="Digite sua senha" 
                    className="campoSenha" 
                />
                <div 
                    className="error" 
                    id="password-required-error">
                        Campo obrigatório
                </div>
            </div>

            <div>
                <label>Confirme sua senha</label>
                <input 
                    type="password" 
                    id="confirmPassword" 
                    onInput={onChangeConfirmPassword} 
                    name="confirmeSenha" 
                    placeholder="Digite sua senha" 
                    className="campoSenha" />
                <div 
                    className="error" 
                    id="confirmPassword-required-error">
                        Campo obrigatório
                </div>
                <div 
                    className="error" 
                    id="confirmPassword-invalid-error">
                        Senha inválida
                </div>
            </div>

            <div className="register">
                <button 
                    type="button" 
                    className="entrar" 
                    id="login-button" 
                    disabled={true}>Cadastrar-se</button>
            </div>

        </form>
    )
}

export default Register;
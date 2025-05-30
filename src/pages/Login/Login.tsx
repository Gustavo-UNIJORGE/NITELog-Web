import type React from "react";
import { Link } from 'react-router';
import { useEffect, useState } from "react";
import validateEmail from "../../utils/validateEmail";
import { handleInputChange } from "../../utils/handleEmailChange";
import { apiService } from "../../services/apiServices";

const Login = ({ }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        emailRequired: false,
        emailInvalid: false,
        passwordInvalid: false
    })
    
    const [isValid, setIsValid] = useState(false);

    const [validationEnabled, setValidationEnabled] = useState(false);

    useEffect(() => {
        if (validationEnabled) {
            setErrors({
                emailRequired: !Boolean(formData.email),
                emailInvalid: !validateEmail(formData.email),
                passwordInvalid: !Boolean(formData.password)
            });
    
            setIsValid(!errors.emailInvalid && !errors.passwordInvalid)
        }
    }, [formData.email, formData.password])

    const enableValidation = () => setValidationEnabled(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof formData) => {
        handleInputChange(e, formData, setFormData, fieldName);
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        enableValidation();
        if(isValid) {
            apiService.loginUser(formData);
            //console.log('Usuário logado: ', formData);
        }
    }

    return (
        <form className="forms" onSubmit={handleFormSubmit}>

            <div>
                <label>
                    Email
                </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    className="campoEmail"
                    value={formData.email}
                    placeholder="Digite seu email" 
                    onChange={(e) => handleChange(e, 'email')}
                    onBlur={enableValidation}
                />
                {errors.emailInvalid && (
                    <div 
                        className="error" 
                        id="email-invalid-error">
                            Email inválido
                    </div>
                )}
                {errors.emailRequired && (
                    <div 
                        className="error" 
                        id="email-required-error">
                            Campo obrigatório
                    </div>
                )}
            </div>


            <div>
                <label 
                    className="labelSenha">
                        Senha
                </label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    className="campoSenha" 
                    value={formData.password}
                    placeholder="Digite sua senha" 
                    onChange={(e) => handleChange(e, 'password')} 
                    onBlur={enableValidation}
                />
                {errors.passwordInvalid && (
                    <div 
                        className="error" 
                        id="password-required-error">
                            Campo obrigatório
                    </div>
                )}
                <div className="esqueciSenhaPosicao">
{/*                     <button 
                        type="button" 
                        className="esqueciSenha" 
                        id="recover-password-button"  
                        disabled={errors.emailInvalid}>
                            Esqueceu a senha?
                    </button> */}
                    <Link to="/resetPassword" className="esqueciSenha">Esqueceu a senha?</Link>
                </div>
            </div>


            <div>
                <button 
                    type="submit" 
                    className="entrar" 
                    id="login-button" 
                    disabled={!isValid}>Entrar</button>
            </div>

            <div className="register">
                <span>Não tem uma conta?</span>
                <Link 
                    to="/register" 
                    className="fazerCadastro">
                        Fazer cadastro
                </Link>
            </div>

        </form>
    )
}

export default Login;


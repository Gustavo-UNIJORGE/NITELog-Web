import type React from "react";
import { Link } from 'react-router';
import { useEffect, useState } from "react";

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

    const validateEmail = (email:string) => {
        return (email && /\S+@\S+\.\S+/.test(email)) as boolean;
    }

    useEffect(() => {
        setErrors({
            emailRequired: !Boolean(formData.email),
            emailInvalid: !validateEmail(formData.email),
            passwordInvalid: !Boolean(formData.password)
        });


        setIsValid(!errors.emailInvalid && !errors.passwordInvalid)
        console.log(errors)

    }, [formData.email, formData.password])

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, email: e.target.value})
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, password: e.target.value})
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Usuário logado: ');
    }

    return (
        <form className="forms" onSubmit={handleFormSubmit}>

            <div>
                <label>
                    Email
                </label>
                <input 
                    type="email" 
                    onInput={handleEmailChange}
                    value={formData.email}
                    name="email" 
                    id="email" 
                    placeholder="Digite seu email" 
                    className={`campoEmail`} 
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
                    value={formData.password}
                    onInput={handlePasswordChange} 
                    placeholder="Digite sua senha" 
                    className="campoSenha" 
                />
                {errors.passwordInvalid && (
                    <div 
                        className="error" 
                        id="password-required-error">
                            Campo obrigatório
                    </div>
                )}
                <div className="esqueciSenhaPosicao">
                    <button 
                        type="button" 
                        className="esqueciSenha" 
                        id="recover-password-button"  
                        disabled={errors.emailInvalid}>
                            Esqueceu a senha?
                    </button>
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


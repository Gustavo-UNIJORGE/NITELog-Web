import { useEffect, useState } from 'react';
import validateEmail from '../../utils/validateEmail';
import { handleInputChange } from '../../utils/handleEmailChange';

const Register = ({ }) => {

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        usernameRequired: false,
        emailRequired: false,
        emailInvalid: false,
        passwordInvalid: false,
        passwordConfirmInvalid: false
    })

    const [isValid, setIsValid] = useState(false);

    const [validationEnabled, setValidationEnabled] = useState(false);

    useEffect(() => {
        if(validationEnabled) {
            setErrors({
                usernameRequired: !Boolean(formData.username),
                emailRequired: !Boolean(formData.email),
                emailInvalid: !validateEmail(formData.email),
                passwordInvalid: !Boolean(formData.password),
                passwordConfirmInvalid: formData.password !== formData.confirmPassword
            });
            setIsValid(Object.values(errors).every(error => error === false));
        }
        console.log(validationEnabled, isValid)
    }, [formData.username, formData.email, formData.password, formData.confirmPassword])

    const enableValidation = () => setValidationEnabled(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof formData) => {
        handleInputChange(e, formData, setFormData, fieldName);
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Usuário registrado: ', formData);
    }

    return (
        <form className="forms" onSubmit={handleFormSubmit}>

            <div>
                <label>Nome completo</label>
                <input 
                    className="campoNome" 
                    type="text" 
                    name="name" 
                    id="name" 
                    value={formData.username}
                    placeholder="Digite seu nome" 
                    onChange={(e) => handleChange(e, 'username')} 
                />
                {errors.usernameRequired && (
                    <div 
                        className="error" 
                        id="name-required-error">
                            Campo obrigatório
                    </div>
                )}
            </div>



            <div>
                <label className="labelCadastrarEmail">
                    Email
                </label>
                <input 
                    className="campoEmail"
                    type="email" 
                    name="email" 
                    id="email" 
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
                <label className="labelCadastrarSenha">
                    Senha
                </label>
                <input 
                    className="campoSenha" 
                    type="password" 
                    id="password" 
                    name="senha" 
                    value={formData.password}
                    placeholder="Digite sua senha" 
                    onChange={(e) => handleChange(e, 'password')}
                    onBlur={enableValidation}
                />
                {errors.passwordInvalid && (
                    <div 
                        className="error" 
                        id="password-required-error">
                            Senha inválida
                    </div>
                )}
            </div>

            <div>
                <label>Confirme sua senha</label>
                <input 
                    className="campoSenha"
                    type="password" 
                    id="confirmPassword" 
                    name="confirmeSenha" 
                    value={formData.confirmPassword}
                    placeholder="Digite sua senha" 
                    onChange={(e) => handleChange(e, 'confirmPassword')}
                    onBlur={enableValidation}
                    />
                {errors.passwordConfirmInvalid && (
                    <div 
                        className="error" 
                        id="confirmPassword-invalid-error">
                            Senhas não coincidem
                    </div>
                )}
                
            </div>

            <div className="register">
                <button 
                    type="submit" 
                    className="entrar" 
                    id="login-button" 
                    disabled={!isValid}>Cadastrar-se</button>
            </div>

        </form>
    )
}

export default Register;
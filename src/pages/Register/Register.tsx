import { useEffect, useState } from 'react';
import validateEmail from '../../utils/validateEmail';
import { handleInputChange } from '../../utils/handleEmailChange';
import { apiService } from '../../services/apiServices';
import { Link } from 'react-router';

const Register = () => {
    const [formData, setFormData] = useState({
        matricula: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({
        matriculaInvalid: false,
        usernameRequired: false,
        emailRequired: false,
        emailInvalid: false,
        passwordInvalid: false,
        passwordConfirmInvalid: false
    });

    const [isValid, setIsValid] = useState(false);

    // Estado que marca os campos que o usuário já tocou (perdeu o foco)
    const [touchedFields, setTouchedFields] = useState<{ [key in keyof typeof formData]?: boolean }>({});

    // Função para marcar campo como "tocado" no onBlur
    const handleBlur = (fieldName: keyof typeof formData) => {
        setTouchedFields(prev => ({ ...prev, [fieldName]: true }));
    };

    useEffect(() => {
        if (Object.keys(touchedFields).length === 0) return;

        const newErrors = {
            matriculaInvalid: !/^\d{10}$/.test(formData.matricula),
            usernameRequired: formData.username === '',
            emailRequired: formData.email === '',
            emailInvalid: formData.email !== '' && !validateEmail(formData.email),
            passwordInvalid: formData.password === '',
            passwordConfirmInvalid: formData.password !== formData.confirmPassword
        };

        setErrors({
            matriculaInvalid: touchedFields.matricula ? newErrors.matriculaInvalid : false,
            usernameRequired: touchedFields.username ? newErrors.usernameRequired : false,
            emailRequired: touchedFields.email ? newErrors.emailRequired : false,
            emailInvalid: touchedFields.email && !newErrors.emailRequired ? newErrors.emailInvalid : false,
            passwordInvalid: touchedFields.password ? newErrors.passwordInvalid : false,
            passwordConfirmInvalid: touchedFields.confirmPassword ? newErrors.passwordConfirmInvalid : false,
        });

        setIsValid(Object.values(newErrors).every(error => error === false));
    }, [formData, touchedFields]);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof formData) => {
        handleInputChange(e, formData, setFormData, fieldName);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setTouchedFields({
            matricula: true,
            username: true,
            email: true,
            password: true,
            confirmPassword: true
        });


        if (!isValid) return;

        const data = {
            password: formData.confirmPassword,
            email: formData.email,
            username: formData.username
        };
        console.log(data);
        apiService.registerUser(data);
    };

    return (
        <form className="forms" onSubmit={handleFormSubmit} noValidate>
            <div>
                <label>Matrícula</label>
                <input
                    className="campoMatricula"
                    type="text"
                    name="matricula"
                    id="matricula"
                    placeholder="Digite sua matrícula"
                    value={formData.matricula}
                    maxLength={10}
                    onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, '').slice(0, 10); // Só número, até 10
                        handleChange({ ...e, target: { ...e.target, value } }, 'matricula');
                    }}
                    onBlur={() => handleBlur('matricula')}
                />
                {errors.matriculaInvalid && (
                    <div className="error" id="matricula-invalid-error">
                        Matrícula deve ter 10 digitos
                    </div>
                )}

            </div>

            <div>
                <label>Nome completo</label>
                <input
                    className="campoNome"
                    type="text"
                    name="username"
                    id="username"
                    value={formData.username}
                    placeholder="Digite seu nome"
                    onChange={(e) => handleChange(e, 'username')}
                    onBlur={() => handleBlur('username')}
                />
                {errors.usernameRequired && (
                    <div className="error" id="name-required-error">
                        Campo obrigatório
                    </div>
                )}
            </div>

            <div>
                <label className="labelCadastrarEmail">Email</label>
                <input
                    className="campoEmail"
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    placeholder="Digite seu email"
                    onChange={(e) => handleChange(e, 'email')}
                    onBlur={() => handleBlur('email')}
                />
                {errors.emailInvalid && (
                    <div className="error" id="email-invalid-error">
                        Email inválido
                    </div>
                )}
                {errors.emailRequired && (
                    <div className="error" id="email-required-error">
                        Campo obrigatório
                    </div>
                )}
            </div>

            <div>
                <label className="labelCadastrarSenha">Senha</label>
                <input
                    className="campoSenha"
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    placeholder="Digite sua senha"
                    onChange={(e) => handleChange(e, 'password')}
                    onBlur={() => handleBlur('password')}
                />
                {errors.passwordInvalid && (
                    <div className="error" id="password-required-error">
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
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    placeholder="Digite sua senha"
                    onChange={(e) => handleChange(e, 'confirmPassword')}
                    onBlur={() => handleBlur('confirmPassword')}
                />
                {errors.passwordConfirmInvalid && (
                    <div className="error" id="confirmPassword-invalid-error">
                        Senhas não coincidem
                    </div>
                )}
            </div>

            <div className="register">
                <button type="submit" className="entrar" id="login-button" disabled={!isValid}>
                    Cadastrar-se
                </button>
            </div>
            <div className="retornarLoginPosicao">
                <Link to="/login" className="retornarLogin">
                    Retornar para o Login
                </Link>
            </div>
        </form>
    );
};

export default Register;

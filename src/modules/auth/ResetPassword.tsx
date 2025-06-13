import type React from "react";
import { Link } from 'react-router';
import { useEffect, useState } from "react";
import validateEmail from "../../utils/validateEmail";
import { handleInputChange } from "../../utils/handleEmailChange";
import niteImg from '../../assets/imagens/nite_6.png';
import UJImg from '../../assets/imagens/unnamed.png';

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        email: '',
    })
    const [errors, setErrors] = useState({
        emailRequired: false,
        emailInvalid: false,
    })
    const [wasSent, setWasSent] = useState(false);

    const [isValid, setIsValid] = useState(false);

    const [validationEnabled, setValidationEnabled] = useState(false);

    // Altera o estado dos erros se houver alterações nos campos
    useEffect(() => {
        if (validationEnabled) {
            setErrors({
                emailRequired: !(formData.email),
                emailInvalid: !validateEmail(formData.email)
            });
        }
    }, [formData.email, validationEnabled])
    // Altera o estado da validade do formulário se houver alterações nos erros
    useEffect(() => {
        if (validationEnabled) {
            setIsValid(Object.values(errors).every(error => error === false))
        }
    }, [errors, validationEnabled])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof formData) => {
        handleInputChange(e, formData, setFormData, fieldName);
        if (!validationEnabled) setValidationEnabled(true); 
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isValid) {
            setWasSent(true);
        }
    }
    return (
          <div>
            <div className="logoNite">
                <img src={niteImg} alt="Logo Nite" style={{ width: '350px' }} />
            </div>
            <div className="logoUJ">
                <img src={UJImg} alt="Logo UJ" style={{ width: '50px' }} />
            </div>
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
                    disabled={wasSent}
                    onChange={(e) => handleChange(e, 'email')}
                />
                {errors.emailRequired && (
                    <div
                        className="error"
                        id="email-required-error">
                        Campo obrigatório
                    </div>
                )}
                {(!errors.emailRequired && errors.emailInvalid) && (
                    <div
                        className="error"
                        id="email-invalid-error">
                        Email inválido
                    </div>
                )}
            </div>

            {wasSent && (
                <div className="sucess">
                    Email enviado com sucesso!
                </div>
            )}
            <div>
                <button
                    type="submit"
                    className="entrar"
                    id="send-button"
                    disabled={(!isValid || wasSent)}>{wasSent ? 'Enviado' : 'Enviar'}</button>
            </div>
            <div className="retornarLoginPosicao">
                <Link to='/login' className="retornarLogin" >Retornar para o Login</Link>
            </div>


        </form>
        </div>
    )
}

export default ResetPassword;


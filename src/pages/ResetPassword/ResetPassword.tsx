import type React from "react";
import { Link } from 'react-router';
import { useEffect, useState } from "react";
import validateEmail from "../../utils/validateEmail";
import { handleInputChange } from "../../utils/handleEmailChange";

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

    /* OBS: Não foi possível unir esses dois useEffect um altera a dependencia
    do outro, dessa forma um unico useEffect ficaria permanentemente em looping */

    const enableValidation = () => setValidationEnabled(true);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof formData) => {
        handleInputChange(e, formData, setFormData, fieldName);
    }

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(isValid) {
            setWasSent(true);
        }
    }
    return (
        <form className="forms" onSubmit={handleFormSubmit}>
            <div>
                <Link to='/login'>Retornar para o Login</Link>
            </div>


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
                    onFocus={enableValidation}
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
                <div className="error">
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

        </form>
    )
}

export default ResetPassword;


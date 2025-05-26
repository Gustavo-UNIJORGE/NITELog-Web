export function onChangeEmail(){
    toggleButtonsDisable();
    toggleEmailErrors();
}

export function onChangePassword(){
    toggleButtonsDisable();
    togglePasswordErrors();
}

function validateEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
}

const isEmailValid = () => {
    const email = form.email().value;
/*     if(!email){
        return false;
    }else{
        return validateEmail(email);
    } */
    return email ? validateEmail(email) : false;
}

const isPasswordValid = () => {
    const password = form.password().value;
    /* if(!password){
        return false;
    }else{
        return true;
    } */
    return password ? true : false;
}

function toggleButtonsDisable(){

    // const emailValid = isEmailValid();
    // const passwordValid = isPasswordValid;

    const recoverBtn = form.recoverPasswordButton?.();
    const loginBtn = form.loginButton?.();

    if (recoverBtn) {
        recoverBtn.disabled = !isEmailValid;
    }

    if (loginBtn) {
        loginBtn.disabled = !isPasswordValid || !isEmailValid;
    }

}

function toggleEmailErrors(){
    const email = form.email().value;
    form.emailRequiredError().style.display = email ? "none":"block";
    
    form.emailInvalidError().style.display = validateEmail(email) ? "none":"block";
}

function togglePasswordErrors(){
    const password = form.password().value;
    form.passwordRequiredError().style.display = password ? "none":"block";
}

const form={
    email:()=>document.getElementById('email')as HTMLInputElement,
    password:()=>document.getElementById('password')as HTMLInputElement,
    emailRequiredError:()=>document.getElementById('email-required-error')as HTMLInputElement,
    emailInvalidError:()=>document.getElementById('email-invalid-error')as HTMLInputElement,
    passwordRequiredError:()=>document.getElementById('password-required-error')as HTMLInputElement,
    loginButton:()=>document.getElementById('login-button')as HTMLInputElement,
    recoverPasswordButton:()=>document.getElementById('recover-password-button')as HTMLInputElement,
}


const Script = () => null;
export default Script;
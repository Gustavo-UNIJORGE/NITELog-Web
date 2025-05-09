function validateFields(){
    const emailValid=isEmailValid();
    document.getElementById('recover-password-button').disabled=!emailValid;

    const passwordValid = isPasswordValid();
    document.getElementById("login-button").disabled=!passwordValid || !emailValid;
}
function isEmailValid(){
    const email = document.getElementById("email").value;
    if(!email){
        return false;
    }else{
        return validateEmail(email);
    }
}
function isPasswordValid(){
    const password = document.getElementById("password").value;
    if(!password){
        return false;
    }else{
        return true;
    }
}
function validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}
export function onChangeName() {
    toggleNameErrors();
}

export function onChangeConfirmPassword() {
    toggleConfirmPasswordErrors();
}

function toggleNameErrors() {
    const name = form.name().value.trim();
    form.nameRequiredError().style.display = name ? "none" : "block";
}

function toggleConfirmPasswordErrors() {
    const password = form.password().value;
    const confirm = form.confirmPassword().value;

    form.confirmPasswordRequiredError().style.display = confirm ? "none" : "block";
    form.confirmPasswordInvalidError().style.display = confirm === password ? "none" : "block";
}

const form = {
    name: () => document.getElementById('name') as HTMLInputElement,
    nameRequiredError: () => document.getElementById('name-required-error') as HTMLElement,
    password: () => document.getElementById('password') as HTMLInputElement,
    confirmPassword: () => document.getElementById('confirmPassword') as HTMLInputElement,
    confirmPasswordRequiredError: () => document.getElementById('confirmPassword-required-error') as HTMLElement,
    confirmPasswordInvalidError: () => document.getElementById('confirmPassword-invalid-error') as HTMLElement,
};

const ScriptRegister = () => null;
export default ScriptRegister;

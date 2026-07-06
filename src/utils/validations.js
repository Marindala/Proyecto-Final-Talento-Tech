export const validarEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
        return "Ingresá un correo electrónico.";
    }

    if (!regex.test(email)) {
        return "El correo electrónico no es válido.";
    }

    return "";
};

export const validarPassword = (password) => {

    if (!password.trim()) {
        return "Ingresá una contraseña.";
    }

    if (password.length < 6) {
        return "La contraseña debe tener al menos 6 caracteres.";
    }

    return "";
};

export const validarNombre = (nombre) => {

    if (!nombre.trim()) {
        return "Ingresá tu nombre.";
    }

    return "";
};

export const validarConfirmPassword = (password, confirmPassword) => {

    if (confirmPassword !== password) {
        return "Las contraseñas no coinciden.";
    }

    return "";
};
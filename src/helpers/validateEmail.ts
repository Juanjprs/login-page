/* Faz a validação do e-mail, usando regex, esperando @ e . */
export function validateEmail(email: string): boolean {
    const regex: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
/* Faz a validação de senha, com a condição de ter 6 caracteres no minimo*/
export function validatePassword(password: string): boolean {
    if (password.length < 6) {
        return false;
    }
    return true;
}

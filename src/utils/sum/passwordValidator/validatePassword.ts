
// https://www.ocpsoft.org/tutorials/regular-expressions/password-regular-expression/
export const validatePassword = (password: string) => {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])(.{8,})$/;
    return regex.test(password);
};
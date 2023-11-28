
export const validateName = (name: string) => {
    return name.trim().length >= 2 && name.trim().length <= 50 && (/^[a-zA-Z]+$/.test(name));
};
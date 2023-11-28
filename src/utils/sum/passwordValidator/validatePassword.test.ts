import { validatePassword } from './validatePassword';

describe('validatePassword', () => {
    it('input without special character', () => {
        const result = validatePassword('great1password');

        expect(result).toBeFalsy();
    });
});

describe('validatePassword', () => {
    it('input without number', () => {
        const result = validatePassword('special#work$');

        expect(result).toBeFalsy();
    });
});

describe('validatePassword', () => {
    it('one special char, one number, and length is equal or above 8 char', () => {
        const result = validatePassword('fully!correct8');

        expect(result).toBeTruthy();
    });
});


describe('validatePassword', () => {
    it('character length is less then 8', () => {
        const result = validatePassword('correct');

        expect(result).toBeFalsy();
    });
});
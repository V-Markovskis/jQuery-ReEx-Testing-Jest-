import { validateEmail } from './validateEmail';


describe('emailValidator', () => {
    it('input without "@"', () => {
        const result = validateEmail('example.example.com');

        expect(result).toBeFalsy();
    });
});


describe('emailValidator', () => {
    it('correct email instance', () => {
        const result = validateEmail('example@example.com');

        expect(result).toBeTruthy();
    });
});


describe('emailValidator', () => {
    it('whitespaces after dot', () => {
        const result = validateEmail('test@mymail.  ');

        expect(result).toBeFalsy();
    });
});


describe('emailValidator', () => {
    it('long domain part', () => {
        const result = validateEmail('teddy@mymail.co.at.com');

        expect(result).toBeTruthy();
    });
});
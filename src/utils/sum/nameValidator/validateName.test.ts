import { validateName } from './validateName';


describe('validateName', () => {
    it('should validate 2 characters', () => {
        const result = validateName('ab');

        expect(result).toEqual(true);
    });
});


describe('validateName', () => {
    it('should validate 1 characters', () => {
        const result = validateName('a');

        expect(result).toEqual(false);
    });
});

describe('validateName', () => {
    it('should validate number', () => {
        const result = validateName('abcc123');

        expect(result).toEqual(false);
    });
});

describe('validateName', () => {
    it('should validate whitespace', () => {
        const result = validateName('  a');

        expect(result).toEqual(false);
    });
});


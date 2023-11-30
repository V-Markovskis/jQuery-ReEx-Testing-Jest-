import { add, multiply } from './mathFunctions';

describe('add function', () => {
    it('sum of two numbers', () => {
        const result = add(22, 2);

        expect(result).toBe(24);
    });
});

describe('add function', () => {
    it('sum of negative numbers', () => {
        const result = add(-5, -5);

        expect(result).toBe(-10);
    });
});

describe('add function', () => {
    it('sum big numbers', () => {
        const result = add(5000, 5000);

        expect(result).toBe(10000);
    });
});

describe('add function', () => {
    it('sum float number', () => {
        const result = add(0.1, 0.2);

        expect(result).toBeCloseTo(0.3);
        expect(result).toBeLessThan(10);
    });
});


describe('multiply function', () => {
    it('multiply ones', () => {
        const result = multiply(1, 1);

        expect(result).toBe(1);
    });
});


describe('multiply function', () => {
    it('multiply by 0', () => {
        const result = multiply(10, 0);

        expect(result).toBe(0);
    });
});


describe('multiply function', () => {
    it('multiply negative numbers', () => {
        const result = multiply(-5, -6);

        expect(result).toBe(30);
    });
});
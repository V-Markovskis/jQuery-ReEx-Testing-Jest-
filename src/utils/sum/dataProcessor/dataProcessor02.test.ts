import { processData } from './dataProcessor';

describe('reduce function with several numbers', () => {
    const testCase = [
        {
            argumentNums: [5, 5, 5],
            expected: 15,
        },
        {
            argumentNums: [25, 5, 25],
            expected: 55,
        },
        {
            argumentNums: [-2, 200, 2],
            expected: 200,
        },
        {
            argumentNums: [20, -20, 0],
            expected: 0,
        },
    ];
    testCase.forEach((test) => {
        it(
            `reduce function with arguments: ${test.argumentNums}, expected: ${test.expected}`,
            () => {
                const result = processData(test.argumentNums);
                expect(result).toBe(test.expected);
            },
        );
    });
});
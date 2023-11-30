import { processData } from './dataProcessor';

//mock copy created for dataProcessor.ts
jest.mock('./dataProcessor');

beforeEach(() => {
    jest.clearAllMocks(); // clear function calls for processData()
});

describe('reduce function', () => {
    it('check if reduce function defined', () => {
        processData([1, 2, 3]);

        expect(processData).toBeDefined();
        expect(processData).not.toBeUndefined();
    });
});

describe('reduce function', () => {
    it('function will be called only once', () => {
        processData([1, 2, 3]);

        expect(processData).toHaveBeenCalledTimes(1);
    });
});


describe('reduce function', () => {
    it('function will be called with the arguments 2, 4, 6', () => {
        processData([2, 4, 6]);

        expect(processData).toHaveBeenCalledWith([2, 4, 6]);
    });
});


// https://stackoverflow.com/questions/71605818/jest-mocking-tohavereturnedwith-undefined
// describe('reduce function', () => {
//     it('reduce function result must be 30', () => {
    
//         processData([10, 10, 10]);

//         expect(processData).toHaveReturnedWith(30);
//     });
// });






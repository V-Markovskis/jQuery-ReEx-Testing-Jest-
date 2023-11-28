import { invalidAlert } from './invalidAlert';

describe('invalidAlert', () => {
    it('invalid message alert should appear', () => {
        const mockFunction = jest.fn();
        global.alert = mockFunction; //not good practice

        invalidAlert('M1', 'name');

        expect(mockFunction).toHaveBeenCalledWith('Invalid name: M1');
    });
});
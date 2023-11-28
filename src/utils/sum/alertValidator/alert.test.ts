import { alertMessage } from './alert';

describe('alertMessageTest', () => {
    it('should display success message', () => {
        const mockAlertFunction = jest.fn();
        //assign global alert DOM to Mock function
        global.alert = mockAlertFunction;

        alertMessage();

        expect(mockAlertFunction).toHaveBeenCalledWith('Success!');
    });
});
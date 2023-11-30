import axios from 'axios';
import { BASE_URL, fetchUsers } from './apiService';

// Mock out all top level functions, such as get, put, delete and post
jest.mock('axios');

describe('axios reponse', () => {
    it('test successfull response', async () => {
        const users = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Andres' },
        ];
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: users });
        console.log(users);

        const result = await fetchUsers();

        expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
        expect(result).toEqual(users);

    });
});

describe('axios response', () => {
    it('should return empty user list', async () => {
        // const message = 'Error message here';
        const users = [{}];
        console.log(users);
        (axios.get as jest.Mock).mockResolvedValueOnce({ data: users });

        const result = await fetchUsers();

        expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
        expect(result).toEqual(users);
    });
});



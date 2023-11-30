import axios from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

type User = {
    id: number;
    name: string
}

export async function fetchUsers(): Promise<User[]> {
    const response = await axios.get(`${BASE_URL}/users`);
    return response.data;
}
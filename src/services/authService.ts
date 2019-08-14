import {axios} from './axiosService';

export const authService = {
    async retrieveCurrentAuth() {
        return await axios.get('/auth');
    },

    async postCookieAuth() {
        return await axios.post('/auth-cookie');
    },

    async clearAuth() {
        return await axios.delete('/auth');
    }
}
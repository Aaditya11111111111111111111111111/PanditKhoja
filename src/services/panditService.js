import api from './api';

export const getPandits = async () => {
    const response = await api.get('/pandits');
    return response.data.data;
};   
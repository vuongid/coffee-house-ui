import * as httpRequest from '~/utils/httpRequest';

export const login = async (values) => {
    try {
        const res = await httpRequest.post('auth/login', values);
        return res;
    } catch (error) {
        throw error;
    }
};

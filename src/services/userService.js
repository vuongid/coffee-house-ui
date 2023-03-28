import * as httpRequest from '~/utils/httpRequest';

export const getMyProfile = async (token) => {
    try {
        const res = await httpRequest.get('user/me', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const register = async (values) => {
    try {
        const res = await httpRequest.post('user/add', values);
        return res;
    } catch (error) {
        throw error;
    }
};

import * as httpRequest from '~/utils/httpRequest';

export const getAllCategory = async () => {
    try {
        const res = await httpRequest.get('category/get-all');
        return res;
    } catch (error) {
        throw error;
    }
};

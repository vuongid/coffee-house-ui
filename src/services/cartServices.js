import * as httpRequest from '~/utils/httpRequest';

export const addCart = async (cart, token) => {
    try {
        const res = await httpRequest.post(
            'cart/add',
            {
                ...cart,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );
        return res;
    } catch (error) {
        console.log(error);
    }
};

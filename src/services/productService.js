import * as httpRequest from '~/utils/httpRequest';

export const getProducts = async (limit) => {
    try {
        const res = await httpRequest.get('product', {
            params: {
                limit,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getProductsByMenu = async (slug) => {
    try {
        const res = await httpRequest.get(slug ? `product/list-${slug}` : `product/get-all`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getProductBySlug = async (slug) => {
    try {
        const res = await httpRequest.get(`product/${slug}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

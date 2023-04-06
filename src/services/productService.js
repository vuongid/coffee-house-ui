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

export const getProductList = async () => {
    try {
        const res = await httpRequest.get('product/get-list');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const addProduct = async (data, option = {}) => {
    try {
        const res = await httpRequest.post('product/add', data, option);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteProduct = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`product/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateProduct = async (id, values, option) => {
    try {
        const res = await httpRequest.put(`product/${id}`, values, option);
        return res;
    } catch (error) {
        console.log(error);
    }
};

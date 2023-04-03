import * as httpRequest from '~/utils/httpRequest';

export const getAllCategory = async () => {
    try {
        const res = await httpRequest.get('category/get-all');
        return res;
    } catch (error) {
        throw error;
    }
};

export const getCategory = async (id) => {
    try {
        const res = await httpRequest.get(`category/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const addCategory = async (values) => {
    try {
        const res = await httpRequest.post('category/add', values);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteCategory = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`category/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateCategory = async (id, values) => {
    try {
        const res = await httpRequest.put(`category/${id}`, values);
        return res;
    } catch (error) {
        console.log(error);
    }
};

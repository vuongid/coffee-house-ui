import axios from 'axios';

const httpRequest = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}api`,
});

export const get = async (path, option = {}) => {
    const res = await httpRequest.get(path, option);
    return res.data;
};

export const post = async (path, data, option = {}) => {
    const res = await httpRequest.post(path, data, option);
    return res.data;
};

export const deleteRequest = async (path, option = {}) => {
    const res = await httpRequest.delete(path, option);
    return res.data;
};

export const put = async (path, data, option = {}) => {
    const res = await httpRequest.put(path, data, option);
    return res.data;
};

export default httpRequest;

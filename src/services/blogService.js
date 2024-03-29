import * as httpRequest from '~/utils/httpRequest';

export const getBlogs = async () => {
    try {
        const res = await httpRequest.get('blog/get-list');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getNewBlogs = async () => {
    try {
        const res = await httpRequest.get('blog/new-blog');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getHomeBlogs = async () => {
    try {
        const res = await httpRequest.get('blog/home-blog');
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getBlogsBySlug = async (slug) => {
    try {
        const res = await httpRequest.get(`blog/list/${slug}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const addBlog = async (data, option = {}) => {
    try {
        const res = await httpRequest.post('blog/add', data, option);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteBlog = async (id) => {
    try {
        const res = await httpRequest.deleteRequest(`blog/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getBlog = async (id) => {
    try {
        const res = await httpRequest.get(`blog/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateBlog = async (id, data, option) => {
    try {
        const res = await httpRequest.put(`blog/${id}`, data, option);
        return res;
    } catch (error) {
        console.log(error);
    }
};

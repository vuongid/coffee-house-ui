import * as httpRequest from '~/utils/httpRequest';

export const getStoreBySlug = async (slug) => {
    try {
        const res = await httpRequest.get(slug ? `store/list-${slug}` : `store/get-all`);
        if (!slug) {
            return [
                {
                    name: '',
                    stores: res,
                },
            ];
        }
        return res;
    } catch (error) {
        console.log(error);
    }
};

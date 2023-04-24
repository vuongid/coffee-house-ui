import * as httpRequest from '~/utils/httpRequest';

export const getLocations = async () => {
    try {
        const res = await httpRequest.get('location/get-all');
        return res;
    } catch (error) {
        console.log(error);
    }
};

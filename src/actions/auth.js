import { getMyProfile } from '~/services/userService';

export const authRequest = (token) => {
    return {
        type: 'AUTH_REQUEST',
        payload: token,
    };
};

export const authSuccess = (user) => {
    return {
        type: 'AUTH_LOGIN',
        payload: user,
    };
};

export const authLogout = () => {
    return {
        type: 'AUTH_LOGOUT',
    };
};

export const mid = (token) => {
    return async (dispatch) => {
        const res = await getMyProfile(token);
        dispatch(authSuccess(res));
    };
};

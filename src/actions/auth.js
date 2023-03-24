import axios from 'axios';

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
    return (dispatch) => {
        axios
            .get(`http://localhost:3001/api/user/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                dispatch(authSuccess(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

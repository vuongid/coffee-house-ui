const initialState = {
    isLogin: JSON.parse(localStorage.getItem('token')) !== null,
    token: JSON.parse(localStorage.getItem('token'))?.token || null,
    user: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH_REQUEST': {
            return {
                ...state,
                token: action.payload,
            };
        }
        case 'AUTH_LOGIN': {
            return {
                ...state,
                isLogin: true,
                user: action.payload,
            };
        }
        case 'AUTH_LOGOUT': {
            return {
                isLogin: false,
                token: null,
                user: null,
            };
        }
        default:
            return state;
    }
};

export default authReducer;

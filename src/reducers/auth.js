import axios from 'axios';

const initialState = {
    isLogin: false,
    token: null,
    user: null,
};

// const initialState = async () => {
//     const token = JSON.parse(localStorage.getItem('token'))?.token;
//     if (token) {
//         const res = await axios.get(`http://localhost:3001/api/user/me`, {
//             headers: {
//                 Authorization: `Bearer ${token}`,
//             },
//         });
//         return {
//             isLogin: true,
//             token: token,
//             user: res.data,
//         };
//     }
//     return {
//         isLogin: false,
//         token: null,
//         user: null,
//     };
// };

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

const initialState = JSON.parse(localStorage.getItem('cart'));

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CART': {
            return action.payload;
        }
        default:
            return state;
    }
};

export default cartReducer;

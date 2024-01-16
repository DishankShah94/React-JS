import {
    FETCH_PRODUCTS,
    LOGIN,
    CLEAR_FORM,
    ALLUSERS
} from '../Action/types';

const initialState = {
    items: [], // Initial empty array for products
    cart: [], // Initial empty array for cart
    login: [],
    formData: [],
    users: [],
    productDetail: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {
                ...state,
                items: action.payload,
            };
        case LOGIN:
            return {
                ...state,
                login: action.payload
            };
        case ALLUSERS:
            return {
                ...state,
                users: action.payload
            }


        default:
            return state;
    }
};

export default productsReducer;
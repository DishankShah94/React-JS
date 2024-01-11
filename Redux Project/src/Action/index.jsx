import API from '../http-common';
import { FETCH_PRODUCTS } from './types';



export const fetchProducts = () => {
    return async (dispatch) => {
        try {
            const response = await API.get('/products');
            // const response = await API.get('/products');
            // fetch
            // axios
            // console.log(response.data); // Check the data returned by the API
            dispatch({
                type: FETCH_PRODUCTS,
                payload: response.data,
            });
        } catch (error) {
            console.log('Error:', error);
        }
    };
};
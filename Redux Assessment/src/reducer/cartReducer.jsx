import { ACCRODIAN } from "../action/actionTypes";

const initialState = {
    // numOfItems: 0,
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACCRODIAN:
            return {
                ...state,
                // numOfItems: state.numOfItems + 1,
            };

        default:
            return state;
    }
}

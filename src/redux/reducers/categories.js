import { categoryAction } from "../actions/categories";

const intitialState = {
    data: [],
    active: {},
};

export const categoryReducer = (state = intitialState, action) => {
    switch (action.type) {
        case categoryAction.GET__CATEGORIES__DATA:
            return (state = {
                data: action.payload,
                active: action.payload[0],
            });
        case categoryAction.SET__ACTIVE__CATEGORY:
            return (state = {
                ...state,
                active: action.payload,
            });
        default:
            return state;
    }
};

import { categoryAction } from "../actions/categories";

const intitialState = {
    categoryNames: [],
    activeCategoryName: null,
    activeCategoryProducts: [],
};

export const categoryReducer = (state = intitialState, action) => {
    switch (action.type) {
        case categoryAction.GET__CATEGORY__NAMES: // * GET ALL CATEGORY NAMES AND SET DEFAULT ACTIVE CATEGORY NAME
            return (state = {
                ...state,
                categoryNames: action.payload,
                activeCategoryName: action.payload[0].name,
            });
        case categoryAction.SET__ACTIVE__CATEGORY:
            return (state = {
                ...state,
                activeCategoryProducts: action.payload.activeCategoryProducts,
                activeCategoryName: action.payload.activeCategoryName,
            });
        default:
            return state;
    }
};

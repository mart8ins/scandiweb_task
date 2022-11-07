import { cartAction } from "../actions/cart";

const initialState = {
    cart: [],
    showCartOverlay: false,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartAction.ADD_ITEM_TO_CART:
            return (state = {
                ...state,
                cart: [...state.cart, action.payload],
            });
        case cartAction.TOOGLE_CART_VIEW:
            return (state = {
                ...state,
                showCartOverlay: action.payload,
            });
        case cartAction.INCREASE_CART_ITEM:
            console.log("increase", action.payload);
            return state;
        case cartAction.DECREASE_CART_ITEM:
            console.log("decrease", action.payload);
            return state;
        default:
            return state;
    }
};

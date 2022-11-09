import { getFromLocalStorage, saveLocalStorage } from "../../components/localStorage";
import { cartAction } from "../actions/cart";

const initialState = {
    cart: [],
    showCartOverlay: false,
    totals: {},
};
export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartAction.ADD_ITEM_TO_CART:
            /* LOCAL STORAGE */
            const lsCart = getFromLocalStorage("cart");
            if (lsCart) {
                saveLocalStorage("cart", [...lsCart, action.payload]);
            } else {
                saveLocalStorage("cart", [action.payload]);
            }
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
            const updatedForIncrease = state.cart.map((cartItem) => {
                if (cartItem.cartItemId === action.payload) {
                    return {
                        ...cartItem,
                        quantity: cartItem.quantity + 1,
                    };
                }
                return cartItem;
            });
            saveLocalStorage("cart", updatedForIncrease);
            return (state = {
                ...state,
                cart: updatedForIncrease,
            });
        case cartAction.DECREASE_CART_ITEM:
            const updatedForDecrease = state.cart.map((cartItem) => {
                if (cartItem.cartItemId === action.payload) {
                    if (cartItem.quantity > 1) {
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity - 1,
                        };
                    }
                }
                return cartItem;
            });
            saveLocalStorage("cart", updatedForDecrease);
            return (state = {
                ...state,
                cart: updatedForDecrease,
            });
        case cartAction.DELETE_CART_ITEM:
            const deletedUpdated = state.cart.filter((item) => {
                return item.cartItemId != action.payload;
            });
            saveLocalStorage("cart", deletedUpdated);
            return {
                ...state,
                cart: deletedUpdated,
            };
        case cartAction.CHANGE_ATTRIBUTE:
            state.cart.forEach((item) => {
                if (item.cartItemId == action.payload.cartItemId) {
                    item.selectedAttributes.forEach((attr) => {
                        if (attr.id == action.payload.id) {
                            attr.id = action.payload.id;
                            attr.item = action.payload.item;
                        }
                    });
                }
            });
            saveLocalStorage("cart", state.cart);
            return state;
        case cartAction.GET_CART_TOTALS:
            console.log("GET CART TOTALS", action.payload);

        case cartAction.GET_CART_LS:
            const cart = getFromLocalStorage("cart");
            return {
                ...state,
                cart: cart || [],
            };
        default:
            return state;
    }
};

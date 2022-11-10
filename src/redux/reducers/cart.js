import { getFromLocalStorage, saveLocalStorage } from "../../components/localStorage";
import { cartAction } from "../actions/cart";

const initialState = {
    cart: [],
    showCartOverlay: false,
    totalProductCount: 0,
    cartTotalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case cartAction.ADD_ITEM_TO_CART:
            /* LOCAL STORAGE */
            let count = 1;
            const lsCart = getFromLocalStorage("cart");
            if (lsCart) {
                lsCart.forEach((item) => {
                    count += item.quantity;
                });
                saveLocalStorage("cart", [...lsCart, action.payload]);
            } else {
                count = 1;
                saveLocalStorage("cart", [action.payload]);
            }
            return (state = {
                ...state,
                cart: [...state.cart, action.payload],
                totalProductCount: count,
            });

        case cartAction.TOOGLE_CART_VIEW:
            return (state = {
                ...state,
                showCartOverlay: action.payload,
            });
        case cartAction.INCREASE_CART_ITEM:
            let totalForIncr = 0;
            const updatedForIncrease = state.cart.map((cartItem) => {
                totalForIncr += cartItem.quantity;
                if (cartItem.cartItemId === action.payload) {
                    totalForIncr += 1;
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
                totalProductCount: totalForIncr,
            });
        case cartAction.DECREASE_CART_ITEM:
            let totalForDec = 0;
            const updatedForDecrease = state.cart.map((cartItem) => {
                totalForDec += cartItem.quantity;
                if (cartItem.cartItemId === action.payload) {
                    if (cartItem.quantity > 1) {
                        totalForDec -= 1;
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
                totalProductCount: totalForDec,
            });
        case cartAction.DELETE_CART_ITEM:
            const deletedUpdated = state.cart.filter((item) => {
                return item.cartItemId != action.payload;
            });
            saveLocalStorage("cart", deletedUpdated);
            return {
                ...state,
                cart: deletedUpdated,
                totalProductCount: state.totalProductCount - 1,
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
        case cartAction.GET_CART_TOTAL_AMOUNT:
            const { activeCurrency } = action.payload;
            let totalAmount = 0;
            action.payload.cart.forEach((item) => {
                item.allPrices.forEach((price) => {
                    if (price.currency.symbol == activeCurrency) {
                        console.log(price.amount);
                        totalAmount += item.quantity * price.amount;
                    }
                });
                console.log(totalAmount, "totalAmount");
                return {
                    ...state,
                    cartTotalAmount: totalAmount,
                };
            });

        case cartAction.GET_CART_LS:
            const cart = getFromLocalStorage("cart");
            let initCount = 0;
            if (cart) {
                cart.forEach((item) => {
                    initCount += item.quantity;
                });
            }
            return {
                ...state,
                cart: cart || state.cart,
                totalProductCount: initCount || 0,
            };
        default:
            return state;
    }
};

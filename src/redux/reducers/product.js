import { productAction } from "../actions/product";

const initialState = {
    productForCart: {},
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case productAction.INITILIZE_PRODUCT:
            return (state = {
                productForCart: action.payload,
            });
        case productAction.ADD_ATTRIBUTE:
            console.log(state.productForCart.selectedAttributes);
            const updatedAttr = state.productForCart.selectedAttributes.map((item) => {
                if (item.id == action.payload.id) {
                    return action.payload;
                } else {
                    return item;
                }
            });

            return (state = {
                productForCart: {
                    ...state.productForCart,
                    selectedAttributes: updatedAttr,
                },
            });
    }
    return state;
};

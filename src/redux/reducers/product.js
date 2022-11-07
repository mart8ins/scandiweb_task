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
            console.log("add attribute");
    }
    return state;
};

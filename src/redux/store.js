import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { currencyReducer } from "./reducers/currency";
import { categoryReducer } from "./reducers/categories";
import { cartReducer } from "./reducers/cart";
import { productReducer } from "./reducers/product";

const rootReducer = combineReducers({ currencyReducer, categoryReducer, cartReducer, productReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));

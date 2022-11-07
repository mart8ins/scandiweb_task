import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { currencyReducer } from "./reducers/currency";
import { categoryReducer } from "./reducers/categories";
import { cartReducer } from "./reducers/cart";

const rootReducer = combineReducers({ currencyReducer, categoryReducer, cartReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));

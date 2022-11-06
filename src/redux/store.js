import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { currencyReducer } from "./reducers/currency";
import { categoryReducer } from "./reducers/categories";

const rootReducer = combineReducers({ currencyReducer, categoryReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));

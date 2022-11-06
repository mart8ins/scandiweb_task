import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { currencyReducer } from "./reducers/currency";

const rootReducer = combineReducers({ currencyReducer });

export const store = createStore(rootReducer, applyMiddleware(thunk));

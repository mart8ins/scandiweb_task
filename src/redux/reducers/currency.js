import { currencyAction } from "../actions/currency";

const intitialState = {
    data: [],
    active: {},
};

export const currencyReducer = (state = intitialState, actions) => {
    switch (actions.type) {
        case currencyAction.GET__CURRENCY__DATA:
            return (state = {
                data: actions.payload,
                active: actions.payload[0],
            });
        case currencyAction.SET__ACTIVE__CURRENCY:
            return (state = {
                ...state,
                active: actions.payload,
            });
        default:
            return state;
    }
};

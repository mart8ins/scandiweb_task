import { currencyAction } from "../actions/currency";

const intitialState = {
    data: [],
    active: {},
    showCurrencyOptions: false,
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
        case currencyAction.TOOGLE__CURRENCY__SWITCHER:
            return (state = {
                ...state,
                showCurrencyOptions: actions.payload,
            });
        default:
            return state;
    }
};

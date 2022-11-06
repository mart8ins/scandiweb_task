const intitialState = {
    categories: [],
};

const categoryReducer = (state = intitialState, action) => {
    switch (action.type) {
        case "some":
            return null;
        default:
            return state;
    }
};

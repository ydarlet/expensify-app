// Modal Reducer

const modalDefaultState = false;

export default (state = modalDefaultState, action) => {
    switch (action.type) {
        case 'OPEN_MODAL':
            return action.boolTrue;
        case 'CLOSE_MODAL':
            return action.boolFalse;
        default:
            return state;
    }
};
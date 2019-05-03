const initialState = {
    isDone: false
};

export default(state = initialState,action) => {
    
    switch(action.type) {
        case 'PRESSED_DONE_BUTTON':
             return { ...state,isDone: true};
        default:
        return state;
    }
}
const initialState = {
    name: 'Romzi'
}

const globalReducer = (state = initialState, action) => {
    if(action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Farhan'
        }
    }
    return state;
}

export default globalReducer;
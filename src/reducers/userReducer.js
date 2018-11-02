const userReducer = (state = {
    name: 'User',
    age:27
}, action) => {
    switch (action.type) { 
        case 'ADD':
            state = {
                state: state.result + action.payload
            }
            break
        case 'DrawerButtonClicked':
            //CSS changes
            break
        case 'SET_NAME_FULFILLED':
            state = {
                ...state,
                name: action.payload
            }
            break
        case 'SET_AGE':
            state = {
                ...state,
                age: action.payload
            }
            break
        default:
            state = {
                name: 'Default',
                age: 100
            }
    }
    return state
}

export default userReducer
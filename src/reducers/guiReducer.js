const guiReducer = (state = {
    hap: 'closed',
}, action) => {
    switch (action.type) { 
        case 'ADD':
            state = {
                state: state.result + action.payload
            }
            break
        case 'DrawerButtonClicked':
            state = {
                ...state,
                hap: action.payload
            }
            break
    }
    return state
}

export default guiReducer
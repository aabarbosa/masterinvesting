import axios from 'axios'

// Action Constants
const REQ_USER = 'REQ_USER'

// Action Creators
export function requestUser() {
  return {
    type: REQ_USER,
    payload: axios.get('api/me').then(res => res.data),
  }
}


const userReducer = (state = {
    name:'datah', 
    age:29
}, action) => {
    switch (action.type) { 
        case 'SET_NAME_FULFILLED':
            state = {
                ...state,
                name: action.payload
            }
            break
        case `${REQ_USER}_PENDING`:
            return { ...state, isLoading: true }
        case `${REQ_USER}_FULFILLED`:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            }
        case 'ADD':
            state = {
                state: state.result + action.payload
            }
            break
        case 'DrawerButtonClicked':
            break
        case 'SET_AGE':
            state = {
                ...state,
                age: action.payload
            }
            break
        default:
            state = {
                name:'data',
                age: 27
                
            }
}
    return state

}

export default userReducer
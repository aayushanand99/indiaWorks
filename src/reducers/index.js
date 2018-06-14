import { combineReducers } from 'redux';


function TestReducer(state = {}, action) {
    switch (action.type) {
        case "TESTING": {
            state = { ...state, o: 10 }
            return state;
        }
        default: {
            return state;
        }
    }
}

const AppReducer = combineReducers({
    TestReducer
})

export default AppReducer;
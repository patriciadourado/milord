import { createStore } from 'redux';

const INITIAL_STATE = {
    data: []
};

function cases(state = INITIAL_STATE, action){
    switch(action.type){
        case 'ADD_CASE':
            return { ...state, data:[ ...state.data, action.title] };
        default:
            return state;
    }
}

const store = createStore(cases);

export default store;
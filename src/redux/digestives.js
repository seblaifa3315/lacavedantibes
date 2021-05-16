import * as ActionTypes from './ActionTypes';

export const Digestives = (state = {
        isLoading: true,
        errMess: null,
        digestives:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DIGESTIVES:
            return {...state, isLoading: false, errMess: null, digestives: action.payload};
        case ActionTypes.DIGESTIVES_LOADING:
            return {...state, isLoading: true, errMess: null, digestives: []};
        case ActionTypes.DIGESTIVES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state; 
    }
};
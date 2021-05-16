import * as ActionTypes from './ActionTypes';

export const Oils = (state = {
        isLoading: true,
        errMess: null,
        oils:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_OILS:
            return {...state, isLoading: false, errMess: null, oils: action.payload};
        case ActionTypes.OILS_LOADING:
            return {...state, isLoading: true, errMess: null, oils: []};
        case ActionTypes.OILS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state; 
    }
};
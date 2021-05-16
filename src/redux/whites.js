import * as ActionTypes from './ActionTypes';

export const Whites = (state = {
        isLoading: true,
        errMess: null,
        whites:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_WHITES:
            return {...state, isLoading: false, errMess: null, whites: action.payload};
        case ActionTypes.WHITES_LOADING:
            return {...state, isLoading: true, errMess: null, whites: []};
        case ActionTypes.WHITES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state; 
    }
};
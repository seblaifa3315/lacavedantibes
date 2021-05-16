import * as ActionTypes from './ActionTypes';

export const Reds = (state = {
        isLoading: true,
        errMess: null,
        reds:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_REDS:
            return {...state, isLoading: false, errMess: null, reds: action.payload};
        case ActionTypes.REDS_LOADING:
            return {...state, isLoading: true, errMess: null, reds: []};
        case ActionTypes.REDS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state; 
    }
};
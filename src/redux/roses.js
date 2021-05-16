import * as ActionTypes from './ActionTypes';

export const Roses = (state = {
        isLoading: true,
        errMess: null,
        roses:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_ROSES:
            return {...state, isLoading: false, errMess: null, roses: action.payload};
        case ActionTypes.ROSES_LOADING:
            return {...state, isLoading: true, errMess: null, roses: []};
        case ActionTypes.ROSES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state; 
    }
};
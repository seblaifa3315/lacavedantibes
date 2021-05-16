import * as ActionTypes from './ActionTypes';

export const Champagnes = (state = {
        isLoading: true,
        errMess: null,
        champagnes:[]
    }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CHAMPAGNES:
            return {...state, isLoading: false, errMess: null, champagnes: action.payload};
        case ActionTypes.CHAMPAGNES_LOADING:
            return {...state, isLoading: true, errMess: null, champagnes: []};
        case ActionTypes.CHAMPAGNES_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state; 
    }
};
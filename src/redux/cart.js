import * as ActionTypes from "./ActionTypes";

export const Cart = (
    state = {
        isLoading: true,
        errMess: null,
        cart: [],
    },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_CART:
            const newCart = action.payload;
            return {
                ...state,
                isLoading: false,
                errMess: null,
                cart: state.cart.concat(newCart),
            };
        case ActionTypes.ADD_CARTS:
            return { ...state, errMess: null, cart: action.payload };
        case ActionTypes.CART_LOADING:
            return { ...state, isLoading: true, errMess: null, cart: [] };
        case ActionTypes.CART_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        case ActionTypes.UPDATE_CART:
            const newObject = action.payload;
            return {...state, errMess: null, cart: state.cart.concat(newObject) };
        case ActionTypes.DELETE_ITEM:
            return { ...state, errMess: null, cart: state.cart.filter(el => el.id !== action.payload.id) };
        default:
            return state;
    }
};

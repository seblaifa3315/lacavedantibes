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
            const index = state.cart.findIndex(
                (item) => item.name === action.payload.name
            );
            const newArray = [...state.cart];
            newArray.splice(index, 1, newObject);
            return { ...state, errMess: null, cart: newArray };
        case ActionTypes.DELETE_ITEM:
            return {
                ...state,
                errMess: null,
                cart: state.cart.filter((el) => el._id !== action.payload._id),
            };
        default:
            return state;
    }
};

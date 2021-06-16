import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

//REDS
export const fetchReds = () => (dispatch) => {
    dispatch(redsLoading());

    return fetch(baseUrl + "shop/Reds")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((reds) => dispatch(addReds(reds)))
        .catch((error) => dispatch(redsFailed(error.message)));
};

export const redsLoading = () => ({
    type: ActionTypes.REDS_LOADING,
});

export const redsFailed = (errMess) => ({
    type: ActionTypes.REDS_FAILED,
    payload: errMess,
});

export const addReds = (reds) => ({
    type: ActionTypes.ADD_REDS,
    payload: reds,
});

//WHITES
export const fetchWhites = () => (dispatch) => {
    dispatch(whitesLoading());

    return fetch(baseUrl + "shop/Whites")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((whites) => dispatch(addWhites(whites)))
        .catch((error) => dispatch(whitesFailed(error.message)));
};

export const whitesLoading = () => ({
    type: ActionTypes.WHITES_LOADING,
});

export const whitesFailed = (errMess) => ({
    type: ActionTypes.WHITES_FAILED,
    payload: errMess,
});

export const addWhites = (whites) => ({
    type: ActionTypes.ADD_WHITES,
    payload: whites,
});

//ROSES
export const fetchRoses = () => (dispatch) => {
    dispatch(rosesLoading());

    return fetch(baseUrl + "roses")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((roses) => dispatch(addRoses(roses)))
        .catch((error) => dispatch(rosesFailed(error.message)));
};

export const rosesLoading = () => ({
    type: ActionTypes.ROSES_LOADING,
});

export const rosesFailed = (errMess) => ({
    type: ActionTypes.ROSES_FAILED,
    payload: errMess,
});

export const addRoses = (roses) => ({
    type: ActionTypes.ADD_ROSES,
    payload: roses,
});

//CHAMPAGNES
export const fetchChampagnes = () => (dispatch) => {
    dispatch(champagnesLoading());

    return fetch(baseUrl + "champagnes")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((champagnes) => dispatch(addChampagnes(champagnes)))
        .catch((error) => dispatch(champagnesFailed(error.message)));
};

export const champagnesLoading = () => ({
    type: ActionTypes.CHAMPAGNES_LOADING,
});

export const champagnesFailed = (errMess) => ({
    type: ActionTypes.CHAMPAGNES_FAILED,
    payload: errMess,
});

export const addChampagnes = (champagnes) => ({
    type: ActionTypes.ADD_CHAMPAGNES,
    payload: champagnes,
});

//DIGESTIVES
export const fetchDigestives = () => (dispatch) => {
    dispatch(digestivesLoading());

    return fetch(baseUrl + "digestives")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((digestives) => dispatch(addDigestives(digestives)))
        .catch((error) => dispatch(digestivesFailed(error.message)));
};

export const digestivesLoading = () => ({
    type: ActionTypes.DIGESTIVES_LOADING,
});

export const digestivesFailed = (errMess) => ({
    type: ActionTypes.DIGESTIVES_FAILED,
    payload: errMess,
});

export const addDigestives = (digestives) => ({
    type: ActionTypes.ADD_DIGESTIVES,
    payload: digestives,
});

//OILS
export const fetchOils = () => (dispatch) => {
    dispatch(oilsLoading());

    return fetch(baseUrl + "oils")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((oils) => dispatch(addOils(oils)))
        .catch((error) => dispatch(oilsFailed(error.message)));
};

export const oilsLoading = () => ({
    type: ActionTypes.OILS_LOADING,
});

export const oilsFailed = (errMess) => ({
    type: ActionTypes.OILS_FAILED,
    payload: errMess,
});

export const addOils = (oils) => ({
    type: ActionTypes.ADD_OILS,
    payload: oils,
});

//CATEGORIES
export const fetchCategories = () => (dispatch) => {
    dispatch(categoriesLoading());

    return fetch(baseUrl + "shop")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((categories) => dispatch(addCategories(categories)))
        .catch((error) => dispatch(categoriesFailed(error.message)));
};

export const categoriesLoading = () => ({
    type: ActionTypes.CATEGORIES_LOADING,
});

export const categoriesFailed = (errMess) => ({
    type: ActionTypes.CATEGORIES_FAILED,
    payload: errMess,
});

export const addCategories = (categories) => ({
    type: ActionTypes.ADD_CATEGORIES,
    payload: categories,
});

//CART
export const fetchCart = () => (dispatch) => {
    return fetch(baseUrl + "cart")
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then((response) => response.json())
        .then((cart) => dispatch(addCarts(cart)))
        .catch((error) => dispatch(cartFailed(error.message)));
};

export const cartFailed = (errMess) => ({
    type: ActionTypes.CART_FAILED,
    payload: errMess,
});

export const addCart = (cart) => ({
    type: ActionTypes.ADD_CART,
    payload: cart,
});

export const addCarts = (carts) => ({
    type: ActionTypes.ADD_CARTS,
    payload: carts,
});

export const postCart = (name, quantity, price, image) => (dispatch) => {
    const newCartItem = {
        name: name,
        quantity: quantity,
        price: price,
        image: image,
    };

    return fetch(baseUrl + "cart", {
        method: "POST",
        body: JSON.stringify(newCartItem),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                throw error;
            }
        )
        .then((response) => response.json())
        .then((response) => dispatch(addCart(response)))
        .catch((error) => {
            console.log("add cart item", error.message);
            alert(
                "Your item could not be added to the cart\nError: " +
                    error.message
            );
        });
};

// ---------------------------------Edit cart -------------------------------------

export const updateCart = (item) => ({
    type: ActionTypes.UPDATE_CART,
    payload: item,
});

export const editCart =
    (name, newQuantity, price, image, idInCart) => (dispatch) => {
        const newObject = {
            name: name,
            quantity: parseInt(newQuantity),
            price: price,
            image: image,
            id: idInCart,
        };

        return fetch(baseUrl + `cart/${idInCart}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newObject),
        })
            .then(
                (response) => {
                    if (response.ok) {
                        return response;
                    } else {
                        const error = new Error(
                            `Error ${response.status}: ${response.statusText}`
                        );
                        error.response = response;
                        throw error;
                    }
                },
                (error) => {
                    throw error;
                }
            )
            .then((response) => response.json())
            .then(dispatch(updateCart(newObject)))
            .catch((error) => {
                console.log("update cart item", error.message);
                alert(
                    "Your item could not be updated from the cart\nError: " +
                        error.message
                );
            });
    };

// ---------------------------------Delete cart -------------------------------------
export const removeItem = (item) => ({
    type: ActionTypes.DELETE_ITEM,
    payload: item,
});

export const deleteItem = (item) => (dispatch) => {
    return fetch(baseUrl + `cart`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
    })
        .then(
            (response) => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(
                        `Error ${response.status}: ${response.statusText}`
                    );
                    error.response = response;
                    throw error;
                }
            },
            (error) => {
                throw error;
            }
        )
        .then((response) => response.json())
        .then(dispatch(removeItem(item)))
        .catch((error) => {
            console.log("delete cart item", error.message);
            alert(
                "Your item could not be deleted from the cart\nError: " +
                    error.message
            );
        });
};

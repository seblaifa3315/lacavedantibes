//importing redux and react-redux stuff
import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";

//importing reducers
import { Reds } from "./reds";
import { Whites } from "./whites";
import { Roses } from "./roses";
import { Champagnes } from "./champagnes";
import { Digestives } from "./digestives";
import { Oils } from "./oils";
import { Categories } from "./categories";
import { Cart } from "./cart"

//importing forms stuff
// import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            // ADD REDUCERS HERE:
            reds: Reds,
            whites: Whites,
            roses: Roses,
            champagnes: Champagnes,
            digestives: Digestives,
            oils: Oils,
            categories: Categories,
            cart: Cart,

            // ...createForms({
            //     feedbackForm: InitialFeedback
            // })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
};

import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { Creducer } from "./company/Creducer";
import thunk from "redux-thunk";
import { Ereducer } from "./employee/Ereducer";

const rootCombiner = combineReducers({

    comp : Creducer,

    emp : Ereducer

})

export const store = legacy_createStore(rootCombiner,applyMiddleware(thunk))


console.log(store.getState())
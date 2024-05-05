import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { customerReducer } from "../store/customerReducer";
import { toolkitCashReducer } from "./toolkitCashReducer";
import { toolkitCustomerReducer } from "./toolkitCustomerReducer";

const rootReducer = combineReducers({
   cash: toolkitCashReducer,
   customers: toolkitCustomerReducer
})

export const store = configureStore({
   reducer: rootReducer,
});
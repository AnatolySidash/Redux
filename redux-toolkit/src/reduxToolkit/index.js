import { combineReducers, configureStore } from "@reduxjs/toolkit";
import toolkitSliceReducer from "./toolkitSliceReducer";
// import { customerReducer } from "../store/customerReducer";
// import { toolkitCashReducer } from "./toolkitCashReducer";
// import { toolkitCustomerReducer } from "./toolkitCustomerReducer";

const rootReducer = combineReducers({
   toolkit: toolkitSliceReducer
})

export const store = configureStore({
   reducer: rootReducer,
});
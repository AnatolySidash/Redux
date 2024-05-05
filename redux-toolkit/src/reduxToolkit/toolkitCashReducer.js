import { createAction, createReducer } from "@reduxjs/toolkit";

const defaultState = {
   toolkitCash: 500,
}

export const ADD_CASH = createAction("ADD_CASH");
export const GET_CASH = createAction("GET_CASH");

export const toolkitCashReducer = createReducer(defaultState, (builder) => {
   builder
      .addCase(ADD_CASH, (state, action) => {
         state.toolkitCash = state.toolkitCash + action.payload
      })
      .addCase(GET_CASH, (state, action) => {
         state.toolkitCash = state.toolkitCash - action.payload
      })
})
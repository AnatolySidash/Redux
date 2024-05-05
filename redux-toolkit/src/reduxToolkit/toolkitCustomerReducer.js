import { createAction, createReducer } from "@reduxjs/toolkit";

const defaultState = {
   toolkitCustomers: [
      { name: 'Kenny', id: 171 },
      { name: 'Jenny', id: 172 },
      { name: 'Teddy', id: 173 },
   ],
}

export const ADD_CUSTOMER = createAction("ADD_CUSTOMER");
export const ADD_MANY_CUSTOMERS = createAction("ADD_MANY_CUSTOMERS");
export const DELETE_CUSTOMER = createAction("DELETE_CUSTOMER");

export const toolkitCustomerReducer = createReducer(defaultState, (builder) => {
   builder
      .addCase(ADD_CUSTOMER, (state, action) => {
         state.toolkitCustomers.push(action.payload)
      })
      .addCase(ADD_MANY_CUSTOMERS, (state, action) => {
         state.toolkitCustomers = state.toolkitCustomers.concat(action.payload)
      })
      .addCase(DELETE_CUSTOMER, (state, action) => {
         state.toolkitCustomers = state.toolkitCustomers.filter(customer => customer.id !== action.payload)
      })
}) 
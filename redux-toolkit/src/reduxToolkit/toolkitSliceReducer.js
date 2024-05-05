import { createSlice } from "@reduxjs/toolkit";


const toolkitSliceReducer = createSlice({
   name: "toolkitSlice",
   initialState: {
      cash: 700,
      customers: [
         { name: 'Mary', id: 171 },
         { name: 'Kelly', id: 172 },
         { name: 'Jenny', id: 173 },
      ]
   },
   reducers: {
      ADD_CASH(state, action) {
         state.cash = state.cash + action.payload
      },
      GET_CASH(state, action) {
         state.cash = state.cash - action.payload
      },
      ADD_CUSTOMER(state, action) {
         state.customers.push(action.payload)
      },
      ADD_MANY_CUSTOMERS(state, action) {
         state.customers = state.customers.concat(action.payload)
      },
      DELETE_CUSTOMER(state, action) {
         state.customers = state.customers.filter(customer => customer.id !== action.payload)
      }
   }
})

export default toolkitSliceReducer.reducer
export const { ADD_CASH, GET_CASH, ADD_CUSTOMER, ADD_MANY_CUSTOMERS, DELETE_CUSTOMER } = toolkitSliceReducer.actions
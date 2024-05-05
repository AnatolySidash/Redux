// import { addManyCustomersAction } from "../store/customerReducer"
// import { ADD_MANY_CUSTOMERS } from '../reduxToolkit/toolkitCustomerReducer';
import { ADD_MANY_CUSTOMERS } from "../reduxToolkit/toolkitSliceReducer"

export const getCustomers = () => {
   return function (dispatch) {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(json =>
            dispatch(ADD_MANY_CUSTOMERS(json)
            ))
   }
}
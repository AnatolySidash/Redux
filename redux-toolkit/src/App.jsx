import { useDispatch, useSelector } from 'react-redux'
// import { addCustomerAction, deleteCustomerAction } from './store/customerReducer';
import { getCustomers } from './asyncActions/customers';
import { ADD_CUSTOMER, DELETE_CUSTOMER } from './reduxToolkit/toolkitCustomerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.toolkitCash);
  const customers = useSelector(state => state.customers.toolkitCustomers);

  const addMoney = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getMoney = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(ADD_CUSTOMER(customer))
  }

  const deleteCustomer = (customer) => {
    dispatch(DELETE_CUSTOMER(customer.id))
  }

  return (
    <>
      <div className='wrapper'>
        <header className='header'>
          <h1 className='main__title'>Redux Toolkit Practice</h1>
        </header>
        <main className='main'>
          <div className='main__amount'>Текущая сумма {cash}</div>
          <button onClick={() => addMoney(Number(prompt()))} className='main__add-money'>Положить деньги</button>
          <button onClick={() => getMoney(Number(prompt()))} className='main__add-money blue'>Снять деньги</button>
          <button onClick={() => addCustomer(prompt())} className='main__add-money'>Добавить клиента</button>
          <button onClick={() => dispatch(getCustomers())} className='main__add-money'>Получить клиентов</button>
          <div>
            {
              customers.length > 0 ?
                <div className='main__list'>
                  {customers.map((customer) =>
                    <div
                      key={customer.id}
                      className='main__customer'
                      onClick={() => deleteCustomer(customer)}>{customer.name}</div>
                  )}
                </div>
                :
                <div>Список клиентов пуст</div>
            }
          </div>
        </main>
      </div>
    </>
  )
}

export default App

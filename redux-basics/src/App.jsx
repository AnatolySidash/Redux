import { useDispatch, useSelector } from 'react-redux'
import { addCustomerAction, deleteCustomerAction } from './store/customerReducer';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);
  console.log(cash);

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
    dispatch(addCustomerAction(customer))
  }

  const deleteCustomer = (customer) => {
    dispatch(deleteCustomerAction(customer.id))
  }

  return (
    <>
      <div className='wrapper'>
        <header className='header'>
          <h1 className='main__title'>Redux Practice</h1>
        </header>
        <main className='main'>
          <div className='main__amount'>Текущая сумма {cash}</div>
          <button onClick={() => addMoney(Number(prompt()))} className='main__add-money'>Положить деньги</button>
          <button onClick={() => getMoney(Number(prompt()))} className='main__add-money blue'>Снять деньги</button>
          <button onClick={() => addCustomer(prompt())} className='main__add-money'>Добавить клиента</button>
          <div>
            {
              customers.length > 0 ?
                <div>
                  {customers.map(customer => <div className='main__customer' onClick={() => deleteCustomer(customer)} key={customer.id}>{customer.name}</div>
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

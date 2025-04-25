import React, { createContext, useContext, useReducer } from 'react'
import AccountReducer, { initialState } from './AccountReducer'

const BankContext = createContext()
const AccountContext = ({children}) => {

  const [state,dispatch] = useReducer(AccountReducer,initialState)
  return (
    <BankContext.Provider value={{state,dispatch}}>
      {children}
    </BankContext.Provider>
  )
}

export default AccountContext;

export const useAccountContext = ()=>useContext(BankContext)
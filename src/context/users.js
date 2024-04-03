'use client'

import { createContext, useState } from 'react'

const UserContext = createContext()

const initialState = {
  email: '',
  password: '',
  token: '',
}

function Provider({ children }) {
  const [loginInfo, setLoginInfo] = useState(initialState)

  const valuesToShare = { loginInfo, setLoginInfo, initialState }

  return (
    <UserContext.Provider value={valuesToShare}>
      {children}
    </UserContext.Provider>
  )
}

export { Provider }
export default UserContext

import { createContext } from 'react'

const AuthContext = createContext({ user: {}, isAuthenticated: false })

export default AuthContext
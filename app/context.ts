import { unstable_createContext } from 'react-router'

// CSP Nonce
export const nonceContext = unstable_createContext<string | undefined>(undefined)

import { ReactNode, createContext } from 'react'

interface ContextState {}

export const Context = createContext<ContextState | null>(null)

export function ContextProvider({ children }: { children: ReactNode }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>
}

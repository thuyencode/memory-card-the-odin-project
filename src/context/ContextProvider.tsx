import { SkillIcon } from '@/types'
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useEffect,
  useState
} from 'react'

interface ContextState {
  setClickedIcons: Dispatch<SetStateAction<Set<SkillIcon>>>
}

export const Context = createContext<ContextState | null>(null)

export function ContextProvider({ children }: { children: ReactNode }) {
  const [clickedIcons, setClickedIcons] = useState(new Set<SkillIcon>())
  // const [latestClickedIcon, setLatestClickedIcon] = useState('')

  useEffect(() => {
    console.log(clickedIcons)
  }, [clickedIcons])

  return (
    <Context.Provider value={{ setClickedIcons }}>{children}</Context.Provider>
  )
}

import { type SkillIcon } from '@/types'
import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from 'react'

interface ContextState {
  setClickedIcons: Dispatch<SetStateAction<Set<SkillIcon>>>
}

export const Context = createContext<ContextState | null>(null)

export function ContextProvider({
  children
}: {
  children: ReactNode
}): ReactNode {
  const [clickedIcons, setClickedIcons] = useState(new Set<SkillIcon>())
  // const [latestClickedIcon, setLatestClickedIcon] = useState('')

  useEffect(() => {
    console.log(clickedIcons)
  }, [clickedIcons])

  return (
    <Context.Provider value={{ setClickedIcons }}>{children}</Context.Provider>
  )
}

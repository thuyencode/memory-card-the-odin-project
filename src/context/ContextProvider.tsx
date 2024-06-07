import { type SkillIcon } from '@/types'
import { getRandomIconsList } from '@/utils'
import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from 'react'

export interface AppContextState {
  setClickedIcons: Dispatch<SetStateAction<Set<SkillIcon>>>
  randomIcons: SkillIcon[]
  setRandomIcons: Dispatch<SetStateAction<SkillIcon[]>>
  generateRandomIconsList: () => void
  isOneIconClicked: boolean
  setOneIconClicked: Dispatch<SetStateAction<boolean>>
}

export const Context = createContext<AppContextState | null>(null)

export function ContextProvider({
  children
}: {
  children: ReactNode
}): ReactNode {
  const [clickedIcons, setClickedIcons] = useState(new Set<SkillIcon>())
  const [randomIcons, setRandomIcons] =
    useState<SkillIcon[]>(getRandomIconsList())
  const [isOneIconClicked, setOneIconClicked] = useState(false)

  useEffect(() => {
    console.log(clickedIcons)
  }, [clickedIcons])

  function generateRandomIconsList(): void {
    setRandomIcons(getRandomIconsList())
  }

  return (
    <Context.Provider
      value={{
        setClickedIcons,
        randomIcons,
        setRandomIcons,
        generateRandomIconsList,
        isOneIconClicked,
        setOneIconClicked
      }}
    >
      {children}
    </Context.Provider>
  )
}

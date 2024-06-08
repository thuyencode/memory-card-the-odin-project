import { appReducer, initialAppState } from '@/reducers/AppReducer'
import { type SkillIcon } from '@/types'
import {
  createContext,
  useReducer,
  useState,
  type Dispatch,
  type ReactNode,
  type SetStateAction
} from 'react'

export interface AppContextState {
  randomIcons: SkillIcon[]
  clickedIcons: Set<SkillIcon>
  generateRandomIconsList: () => void
  setClickedIcon: (icon: SkillIcon) => void
  isOneIconClicked: boolean
  setOneIconClicked: Dispatch<SetStateAction<boolean>>
}

export const Context = createContext<AppContextState | null>(null)

export function ContextProvider({
  children
}: {
  children: ReactNode
}): ReactNode {
  const [state, dispatch] = useReducer(appReducer, initialAppState)
  const [isOneIconClicked, setOneIconClicked] = useState(false)

  function generateRandomIconsList(): void {
    dispatch({ type: 'GENERATE_RANDOM_ICONS_LIST' })
  }

  function setClickedIcon(icon: SkillIcon): void {
    dispatch({ type: 'SET_CLICKED_ICON', icon })
  }

  return (
    <Context.Provider
      value={{
        randomIcons: state.randomIcons,
        clickedIcons: state.clickedIcons,
        generateRandomIconsList,
        setClickedIcon,
        isOneIconClicked,
        setOneIconClicked
      }}
    >
      {children}
    </Context.Provider>
  )
}

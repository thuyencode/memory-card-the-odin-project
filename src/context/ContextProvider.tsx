import { initialIconsState, reducer } from '@/reducer'
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
  const [state, dispatch] = useReducer(reducer, initialIconsState)
  const [isOneIconClicked, setOneIconClicked] = useState(false)

  function generateRandomIconsList(): void {
    dispatch({ type: 'GENERATE_RANDOM_ICONS_LIST' })
  }

  function setClickedIcons(icon: SkillIcon): void {
    dispatch({ type: 'SET_CLICKED_ICON', icon })
  }

  return (
    <Context.Provider
      value={{
        randomIcons: state.randomIcons,
        generateRandomIconsList,
        setClickedIcon: setClickedIcons,
        isOneIconClicked,
        setOneIconClicked
      }}
    >
      {children}
    </Context.Provider>
  )
}

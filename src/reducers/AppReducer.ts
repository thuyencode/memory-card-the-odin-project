import { type SkillIcon } from '@/types'
import { getRandomIconsList } from '@/utils'

export interface AppState {
  clickedIcons: Set<SkillIcon>
  randomIcons: SkillIcon[]
  highestScore: number
  currentScore: number
}

type AppAction =
  | {
      type: 'SET_CLICKED_ICON'
      icon: SkillIcon
    }
  | {
      type: 'GENERATE_RANDOM_ICONS_LIST'
    }

export const initialAppState: AppState = {
  clickedIcons: new Set<SkillIcon>(),
  randomIcons: getRandomIconsList(),
  highestScore: 0,
  currentScore: 0
}

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_CLICKED_ICON':
      return {
        ...state,
        clickedIcons: state.clickedIcons.has(action.icon)
          ? initialAppState.clickedIcons
          : new Set([...state.clickedIcons, action.icon]),
        currentScore: state.clickedIcons.has(action.icon)
          ? initialAppState.currentScore
          : state.currentScore + 1,
        highestScore: state.clickedIcons.has(action.icon)
          ? state.highestScore
          : state.highestScore === state.currentScore
            ? state.highestScore + 1
            : state.highestScore
      }

    case 'GENERATE_RANDOM_ICONS_LIST':
      return {
        ...state,
        randomIcons: getRandomIconsList()
      }

    default:
      return state
  }
}

import { type SkillIcon } from '@/types'
import { getRandomIconsList } from '@/utils'

export interface IconsState {
  clickedIcons: Set<SkillIcon>
  randomIcons: SkillIcon[]
}

type Action =
  | {
      type: 'SET_CLICKED_ICON'
      icon: SkillIcon
    }
  | {
      type: 'GENERATE_RANDOM_ICONS_LIST'
    }

export const initialIconsState: IconsState = {
  clickedIcons: new Set<SkillIcon>(),
  randomIcons: getRandomIconsList()
}

export function reducer(state: IconsState, action: Action): IconsState {
  switch (action.type) {
    case 'SET_CLICKED_ICON':
      return {
        ...state,
        clickedIcons: new Set([...state.clickedIcons, action.icon])
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

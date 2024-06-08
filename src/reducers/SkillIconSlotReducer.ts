interface SkillIconSlotState {
  isClicked: boolean
  isHide: boolean
  isIncorrect: boolean
}

export const initialSkillIconSlotState: SkillIconSlotState = {
  isClicked: false,
  isHide: false,
  isIncorrect: false
}

interface SkillIconSlotAction {
  type:
    | 'SET_HIDE_OR_NOT'
    | 'SET_CLICKED_OR_NOT'
    | 'SET_INCORRECT_OR_CORRECT'
    | 'RESET'
  value: boolean
}

export function skillIconSlotReducer(
  state: SkillIconSlotState,
  action: SkillIconSlotAction
): SkillIconSlotState {
  switch (action.type) {
    case 'SET_HIDE_OR_NOT':
      return {
        ...state,
        isHide: action.value
      }

    case 'SET_CLICKED_OR_NOT':
      return {
        ...state,
        isClicked: action.value
      }

    case 'SET_INCORRECT_OR_CORRECT':
      return {
        ...state,
        isIncorrect: action.value
      }

    case 'RESET':
      return initialSkillIconSlotState

    default:
      return state
  }
}

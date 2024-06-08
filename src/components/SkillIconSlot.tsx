import useAppContext from '@/hooks/useAppContext'
import {
  initialSkillIconSlotState,
  skillIconSlotReducer
} from '@/reducers/SkillIconSlotReducer'
import { type SkillIcon } from '@/types'
import { capitalize } from '@/utils'
import { Icon } from '@iconify-icon/react'
import { useEffect, useReducer, type ReactNode } from 'react'
import { useDarkMode } from 'usehooks-ts'

interface SkillIconSlotProps {
  icon: SkillIcon
}

function SkillIconSlot({ icon }: SkillIconSlotProps): ReactNode {
  const {
    clickedIcons,
    setClickedIcon,
    generateRandomIconsList,
    isOneIconClicked,
    setOneIconClicked
  } = useAppContext()
  const { isDarkMode } = useDarkMode()
  const [state, dispatch] = useReducer(
    skillIconSlotReducer,
    initialSkillIconSlotState
  )

  useEffect(() => {
    if (state.isClicked) {
      setTimeout(() => {
        generateRandomIconsList()
        setOneIconClicked(false)

        dispatch({ type: 'SET_HIDE_OR_NOT', value: true })
        dispatch({ type: 'RESET' })
      }, 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isClicked])

  function onClick(): void {
    if (isOneIconClicked) {
      return
    }

    if (state.isClicked) {
      return
    }

    dispatch({ type: 'SET_CLICKED_OR_NOT', value: true })
    dispatch({
      type: 'SET_INCORRECT_OR_CORRECT',
      value: clickedIcons.has(icon)
    })

    setOneIconClicked(true)
    setClickedIcon(icon)
  }

  function getAnimationStyle(): string {
    return state.isIncorrect
      ? 'animate-shake opacity-80'
      : 'animate-bounce opacity-80'
  }

  function getMarkBtnIcon(): string {
    return state.isIncorrect
      ? 'emojione:cross-mark-button'
      : 'emojione:white-heavy-check-mark'
  }

  if (state.isHide) {
    return null
  }

  return (
    <div
      className='tooltip tooltip-info relative duration-150 hover:scale-110'
      onClick={onClick}
      data-tip={capitalize(icon)}
    >
      <img
        className={`h-20 w-20 transform-gpu transition-opacity md:h-24 md:w-24 lg:h-32 lg:w-32 ${state.isClicked ? getAnimationStyle() : ''}`}
        src={`https://skillicons.dev/icons?i=${icon}&theme=${isDarkMode ? 'light' : 'dark'}`}
        alt={icon}
      />
      {state.isClicked ? (
        <Icon
          className='absolute inset-0 m-auto h-fit w-fit transform-gpu animate-ping text-2xl md:text-4xl'
          icon={getMarkBtnIcon()}
        />
      ) : null}
    </div>
  )
}

export default SkillIconSlot

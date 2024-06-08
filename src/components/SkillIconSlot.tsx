import useAppContext from '@/hooks/useAppContext'
import { type SkillIcon } from '@/types'
import { capitalize } from '@/utils'
import { Icon } from '@iconify-icon/react'
import { useEffect, useState, type ReactNode } from 'react'
import { useDarkMode } from 'usehooks-ts'

interface SkillIconSlotProps {
  icon: SkillIcon
  incorrect?: true
}

function SkillIconSlot({ icon, incorrect }: SkillIconSlotProps): ReactNode {
  const {
    setClickedIcon,
    generateRandomIconsList,
    isOneIconClicked,
    setOneIconClicked
  } = useAppContext()
  const { isDarkMode } = useDarkMode()
  const [isClicked, setClicked] = useState(false)
  const [isHide, setHide] = useState(false)

  useEffect(() => {
    if (isClicked) {
      setTimeout(() => {
        generateRandomIconsList()
        setHide(true)
        setOneIconClicked(false)
      }, 500)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClicked])

  function onClick(): void {
    if (isOneIconClicked) {
      return
    }

    if (isClicked) {
      return
    }

    setClicked(!isClicked)
    setOneIconClicked(true)
    setClickedIcon(icon)
  }

  function getAnimationStyle(): string {
    return incorrect ? 'animate-shake opacity-80' : 'animate-bounce opacity-80'
  }

  function getMarkBtnIcon(): string {
    return incorrect
      ? 'emojione:cross-mark-button'
      : 'emojione:white-heavy-check-mark'
  }

  if (isHide) {
    return null
  }

  return (
    <div
      className='tooltip tooltip-info relative duration-150 hover:scale-110'
      onClick={onClick}
      data-tip={capitalize(icon)}
    >
      <img
        className={`h-20 w-20 transform-gpu transition-opacity md:h-24 md:w-24 lg:h-32 lg:w-32 ${isClicked ? getAnimationStyle() : ''}`}
        src={`https://skillicons.dev/icons?i=${icon}&theme=${isDarkMode ? 'light' : 'dark'}`}
        alt={icon}
      />
      {isClicked ? (
        <Icon
          className='absolute inset-0 m-auto h-fit w-fit transform-gpu animate-ping text-2xl md:text-4xl'
          icon={getMarkBtnIcon()}
        />
      ) : null}
    </div>
  )
}

export default SkillIconSlot

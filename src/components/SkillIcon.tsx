import { skillIconsList } from '@/utils/skill-icons'
import { Icon } from '@iconify-icon/react'
import { useEffect, useState } from 'react'
import { useDarkMode } from 'usehooks-ts'

interface SkillIconProps {
  icon: (typeof skillIconsList)[number]
  incorrect?: boolean
}

function SkillIcon({ icon, incorrect }: SkillIconProps) {
  const { isDarkMode } = useDarkMode()
  const [isClicked, setClicked] = useState(false)
  const [isHide, setHide] = useState(false)

  useEffect(() => {
    if (isClicked == true) {
      setTimeout(() => {
        setHide(true)
      }, 500)
    }
  }, [isClicked])

  function onClick() {
    if (isClicked) {
      return
    }

    setClicked(!isClicked)
  }

  function getAnimationStyle() {
    return incorrect ? 'animate-shake opacity-80' : 'animate-bounce opacity-80'
  }

  function getIcon() {
    return incorrect
      ? 'emojione:cross-mark-button'
      : 'emojione:white-heavy-check-mark'
  }

  if (isHide) {
    return null
  }

  return (
    <figure className='group' onClick={onClick}>
      <div className='relative duration-150 group-hover:scale-110'>
        <img
          className={`h-32 w-32 transform-gpu transition-opacity ${isClicked ? getAnimationStyle() : ''}`}
          src={`https://skillicons.dev/icons?i=${icon}&theme=${isDarkMode ? 'light' : 'dark'}`}
          alt={icon}
          key={icon}
        />
        {isClicked ? (
          <Icon
            className='absolute inset-0 m-auto h-fit w-fit transform-gpu animate-ping text-4xl'
            icon={getIcon()}
          />
        ) : null}
      </div>
      <figcaption className='mt-4 text-center capitalize'>{icon}</figcaption>
    </figure>
  )
}

export default SkillIcon

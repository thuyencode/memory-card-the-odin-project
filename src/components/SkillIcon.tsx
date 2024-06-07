import { Icon } from '@iconify-icon/react'
import { useEffect, useState } from 'react'
import { useDarkMode } from 'usehooks-ts'
import { skillIcons } from '../utils/skill-icons'

function SkillIcon({ icon }: { icon: (typeof skillIcons)[number] }) {
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

  function click() {
    if (isClicked) {
      return
    }

    setClicked(!isClicked)
  }

  if (isHide) {
    return null
  }

  return (
    <figure className='group' onClick={click}>
      <div className='relative duration-150 group-hover:scale-110'>
        <img
          className={`h-32 w-32 transform-gpu transition-opacity ${isClicked ? 'animate-bounce opacity-80' : ''}`}
          src={`https://skillicons.dev/icons?i=${icon}&theme=${isDarkMode ? 'light' : 'dark'}`}
          alt={icon}
          key={icon}
        />
        {isClicked ? (
          <Icon
            className='absolute inset-0 m-auto h-fit w-fit transform-gpu animate-ping text-4xl'
            icon='emojione:white-heavy-check-mark'
          />
        ) : null}
      </div>
      <figcaption className='mt-4 text-center capitalize'>{icon}</figcaption>
    </figure>
  )
}

export default SkillIcon

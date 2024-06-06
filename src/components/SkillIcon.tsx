import { Icon } from '@iconify-icon/react'
import { skillIcons } from '../utils/skill-icons'

function SkillIcon({ icon }: { icon: (typeof skillIcons)[number] }) {
  return (
    <figure className='group'>
      <div className='relative duration-150 group-hover:scale-110'>
        <img
          className='h-32 w-32 opacity-80'
          src={`https://skillicons.dev/icons?i=${icon}&theme=light`}
          alt={icon}
          key={icon}
        />
        <Icon
          className='absolute inset-0 m-auto h-fit w-fit text-4xl'
          icon='emojione:white-heavy-check-mark'
        />
      </div>
      <figcaption className='mt-4 text-center capitalize'>{icon}</figcaption>
    </figure>
  )
}

export default SkillIcon

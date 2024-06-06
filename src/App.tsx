import { Icon } from '@iconify-icon/react'
import { skillsIcons } from './utils/skill-icons'

export default function App() {
  return (
    <div className='absolute inset-0 m-auto grid h-fit w-fit grid-cols-5 grid-rows-2 gap-7'>
      {skillsIcons.slice(0, 10).map((icon) => (
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
          <figcaption className='mt-4 text-center capitalize'>
            {icon}
          </figcaption>
        </figure>
      ))}
    </div>
  )
}

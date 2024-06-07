import { type ReactNode } from 'react'
import ShowSkillIcon from './components/ShowSkillIcon'
import { ContextProvider } from './context/ContextProvider'
import { skillIconsList } from './utils/skill-icons'

export default function App(): ReactNode {
  return (
    <ContextProvider>
      <div className='absolute inset-0 m-auto grid h-fit w-fit grid-cols-5 grid-rows-2 gap-7'>
        {skillIconsList.slice(0, 10).map((icon) => (
          <ShowSkillIcon icon={icon} key={icon} incorrect />
        ))}
      </div>
    </ContextProvider>
  )
}

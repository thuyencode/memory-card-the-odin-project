import { type ReactNode } from 'react'
import ShowSkillIcon from './components/ShowSkillIcon'
import useAppContext from './hooks/useAppContext'

export default function App(): ReactNode {
  const { randomIcons } = useAppContext()

  return (
    <div className='absolute inset-0 m-auto grid h-fit w-fit grid-cols-5 grid-rows-2 gap-7'>
      {randomIcons.map((icon) => (
        <ShowSkillIcon icon={icon} key={icon} incorrect />
      ))}
    </div>
  )
}

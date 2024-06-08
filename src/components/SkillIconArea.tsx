import useAppContext from '@/hooks/useAppContext'
import { type ReactElement } from 'react'
import SkillIconSlot from './SkillIconSlot'

function SkillIconArea(): ReactElement {
  const { randomIcons } = useAppContext()

  return (
    <main className='inset-0 grid h-fit w-fit grid-cols-2 gap-10 sm:absolute sm:m-auto sm:grid-cols-5'>
      {randomIcons.map((icon) => (
        <SkillIconSlot icon={icon} key={icon} incorrect />
      ))}
    </main>
  )
}

export default SkillIconArea

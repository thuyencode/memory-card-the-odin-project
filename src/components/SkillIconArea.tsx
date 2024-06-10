import useAppContext from '@/hooks/useAppContext'
import { type ReactElement } from 'react'
import SkillIconSlot from './SkillIconSlot'

function SkillIconArea(): ReactElement {
  const { randomIcons } = useAppContext()

  return (
    <main className='inset-0 grid size-fit grid-cols-2 gap-5 xs:grid-cols-3 sm:absolute sm:m-auto sm:grid-cols-5 sm:gap-10'>
      {randomIcons.map((icon) => (
        <SkillIconSlot icon={icon} key={icon} />
      ))}
    </main>
  )
}

export default SkillIconArea

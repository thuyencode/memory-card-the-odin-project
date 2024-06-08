import useAppContext from '@/hooks/useAppContext'
import { type ReactNode } from 'react'
import SkillIconSlot from './SkillIconSlot'

export function SkillIconArea(): ReactNode {
  const { randomIcons } = useAppContext()

  return (
    <div className='absolute inset-0 m-auto grid h-fit w-fit grid-cols-2 gap-7 sm:grid-cols-5'>
      {randomIcons.map((icon) => (
        <SkillIconSlot icon={icon} key={icon} incorrect />
      ))}
    </div>
  )
}

export default SkillIconArea

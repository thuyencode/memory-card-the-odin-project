import SkillIcon from './components/SkillIcon'
import { skillIconsList } from './utils/skill-icons'

export default function App() {
  return (
    <div className='absolute inset-0 m-auto grid h-fit w-fit grid-cols-5 grid-rows-2 gap-7'>
      {skillIconsList.slice(0, 10).map((icon) => (
        <SkillIcon icon={icon} key={icon} incorrect />
      ))}
    </div>
  )
}

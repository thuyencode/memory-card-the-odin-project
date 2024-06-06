import { skillsIcons } from './utils/skill-icons'

export default function App() {
  return (
    <div className='flex flex-wrap items-center justify-center'>
      {skillsIcons.slice(0, 10).map((icon) => (
        <img
          className='h-20 w-20'
          src={`https://skillicons.dev/icons?i=${icon}&theme=dark`}
          alt={icon}
          key={icon}
        />
      ))}
    </div>
  )
}

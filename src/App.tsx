import { type ReactNode } from 'react'
import SkillIconArea from './components/SkillIconArea'
import { ContextProvider } from './context/ContextProvider'

export default function App(): ReactNode {
  return (
    <ContextProvider>
      <SkillIconArea />
    </ContextProvider>
  )
}

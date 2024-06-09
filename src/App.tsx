import { type ReactElement } from 'react'
import ScoresBoards from './components/ScoresBoards'
import SkillIconArea from './components/SkillIconArea'
import { ContextProvider } from './context/ContextProvider'

export default function App(): ReactElement {
  return (
    <ContextProvider>
      <ScoresBoards />
      <SkillIconArea />
    </ContextProvider>
  )
}

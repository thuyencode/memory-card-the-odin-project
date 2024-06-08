import { type ReactElement } from 'react'
import ScoresBoard from './components/ScoresBoard'
import SkillIconArea from './components/SkillIconArea'
import { ContextProvider } from './context/ContextProvider'

export default function App(): ReactElement {
  return (
    <ContextProvider>
      <ScoresBoard />
      <SkillIconArea />
    </ContextProvider>
  )
}

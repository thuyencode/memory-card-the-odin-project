import { type ReactElement } from 'react'
import Footer from './components/Footer'
import InfoBubbles from './components/InfoBubbles'
import ScoresBoards from './components/ScoresBoards'
import SkillIconArea from './components/SkillIconArea'
import { ContextProvider } from './context/ContextProvider'

export default function App(): ReactElement {
  return (
    <>
      <ContextProvider>
        <ScoresBoards />
        <SkillIconArea />
      </ContextProvider>
      <Footer />
      <InfoBubbles />
    </>
  )
}

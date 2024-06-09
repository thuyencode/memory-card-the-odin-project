import useAppContext from '@/hooks/useAppContext'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import { type ReactElement } from 'react'

function ScoresBoards(): ReactElement {
  return (
    <div className='join inset-0 mx-auto h-fit w-fit bg-base-300 text-center font-display max-sm:join-vertical sm:absolute sm:mt-28 lg:mt-20'>
      <CurrentScoreBoard />
      <HighestScoreBoard />
    </div>
  )
}

function CurrentScoreBoard(): ReactElement {
  const { currentScore } = useAppContext()

  return (
    <div className='join-item items-center border border-base-content p-4 max-sm:inline-flex'>
      <p className='inline-flex items-center gap-2 text-lg lg:text-xl'>
        <Icon className='text-xl md:text-2xl' icon='noto:direct-hit' /> Current
        score
      </p>
      <span className='mr-1 sm:hidden'>:</span>
      <p className='text-lg font-bold sm:text-xl md:text-2xl lg:mt-2'>
        {currentScore}
      </p>
    </div>
  )
}

function HighestScoreBoard(): ReactElement {
  const { highestScore } = useAppContext()

  return (
    <div className='join-item items-center border border-base-content p-4 max-sm:inline-flex'>
      <p className='inline-flex items-center gap-2 text-lg max-sm:flex-row-reverse lg:text-xl'>
        Highest score{' '}
        <Icon className='text-xl md:text-2xl' icon='noto:trophy' />
      </p>
      <span className='mr-auto sm:hidden'>:</span>
      <p className='text-lg font-bold sm:text-xl md:text-2xl lg:mt-2'>
        {highestScore}
      </p>
    </div>
  )
}

export default ScoresBoards

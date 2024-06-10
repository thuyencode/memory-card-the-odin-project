import useAppContext from '@/hooks/useAppContext'
import { Icon } from '@iconify-icon/react/dist/iconify.mjs'
import { type ReactElement } from 'react'

function ScoresBoards(): ReactElement {
  return (
    <div className='join inset-0 z-10 mx-auto size-fit bg-base-200 text-center font-display max-sm:join-vertical sm:absolute sm:mt-24'>
      <CurrentScoreBoard />
      <HighestScoreBoard />
    </div>
  )
}

function CurrentScoreBoard(): ReactElement {
  const { currentScore } = useAppContext()

  return (
    <div className='join-item items-center border border-base-content p-2 max-sm:inline-flex sm:p-4'>
      <p className='inline-flex items-center gap-2 sm:text-lg lg:text-xl'>
        <Icon
          className='text-lg sm:text-xl md:text-2xl'
          icon='noto:direct-hit'
        />{' '}
        Current score
      </p>
      <span className='mr-1 sm:hidden'>:</span>
      <p className='text-lg font-bold sm:text-xl sm:duration-500 sm:hover:scale-150 md:text-2xl lg:mt-2'>
        {currentScore}
      </p>
    </div>
  )
}

function HighestScoreBoard(): ReactElement {
  const { highestScore } = useAppContext()

  return (
    <div className='join-item items-center border border-base-content p-2 max-sm:inline-flex sm:p-4'>
      <p className='inline-flex items-center gap-2 max-sm:flex-row-reverse sm:text-lg lg:text-xl'>
        Highest score{' '}
        <Icon className='text-lg sm:text-xl md:text-2xl' icon='noto:trophy' />
      </p>
      <span className='mr-auto sm:hidden'>:</span>
      <p className='text-lg font-bold sm:text-xl sm:duration-500 sm:hover:scale-150 md:text-2xl lg:mt-2'>
        {highestScore}
      </p>
    </div>
  )
}

export default ScoresBoards

import { Icon } from '@iconify-icon/react'
import { useCallback, useRef, type ReactElement, type ReactPortal } from 'react'
import { createPortal } from 'react-dom'

function InfoBubbles(): ReactPortal {
  return createPortal(
    <div className='absolute bottom-10 right-5 z-10 flex flex-col items-center gap-2'>
      <GithubBubble />
      <HelpBubble />
    </div>,
    document.body
  )
}

function GithubBubble(): ReactElement {
  return (
    <a
      className='indicator tooltip tooltip-left inline-flex items-center'
      href='https://github.com/thuyencode/memory-card-the-odin-project'
      target='_blank'
      data-tip='Open GitHub'
      rel='noreferrer'
    >
      <Icon
        className='cursor-pointer rounded-full border border-base-content bg-base-100 p-1 text-4xl duration-100 hover:bg-base-content hover:text-base-100 sm:text-5xl'
        icon='mdi:github'
      />
      <div className='indicator-item'>
        <Icon
          className='-translate-x-1/4 translate-y-1/3 rounded-full bg-info p-1 text-info-content max-sm:text-sm'
          icon='mdi:external-link'
        />
      </div>
    </a>
  )
}

function HelpBubble(): ReactElement {
  const ref = useRef<HTMLDialogElement>(null)
  const handleShow = useCallback(() => {
    ref.current?.showModal()
  }, [ref])

  return (
    <div
      className='tooltip tooltip-left inline-flex items-center'
      data-tip='How to play'
    >
      <Icon
        className='cursor-pointer rounded-full border border-base-content bg-base-100 p-2.5 text-2xl duration-100 hover:bg-base-content hover:text-base-100 sm:p-3 sm:text-3xl'
        icon='mdi:question-mark'
        onClick={handleShow}
      />

      <dialog className='modal' ref={ref}>
        <div className='modal-box p-4'>
          <p className='inline-flex items-center gap-1 font-display text-lg font-bold'>
            <Icon className='text-xl' icon='noto:thinking-face' />{' '}
            <span>How to play this game?</span>{' '}
            <Icon className='text-xl' icon='noto:video-game' />{' '}
          </p>
          <p className='py-4 font-medium'>
            Double-clicking any icons will reset the game.
          </p>
          <div className='modal-action mt-2'>
            <form method='dialog'>
              <button className='btn btn-error btn-sm gap-0.5 font-display'>
                Close <Icon className='text-lg' icon='pixelarticons:close' />
              </button>
            </form>
          </div>
        </div>
        <form method='dialog' className='modal-backdrop'>
          <button>this button is not shown</button>
        </form>
      </dialog>
    </div>
  )
}

export default InfoBubbles

import { Icon } from '@iconify-icon/react'
import { type ReactPortal } from 'react'
import { createPortal } from 'react-dom'

function Footer(): ReactPortal {
  return createPortal(
    <footer className='inset-x-0 bottom-0 mb-2.5 flex items-center justify-center gap-1 text-sm max-sm:flex-col max-sm:text-xs sm:absolute sm:mb-5'>
      <a
        className='inline-flex items-center gap-0.5'
        href='https://github.com/thuyencode/memory-card-the-odin-project'
        target='_blank'
        rel='noreferrer'
      >
        <Icon className='text-lg sm:text-xl' icon='mdi:copyright' />
        Thuyen Code
      </a>
      <span className='max-sm:hidden'>|</span>
      <a
        href='https://github.com/tandpfun/skill-icons'
        target='_blank'
        rel='noreferrer'
      >
        Icons from the Skill Icons project is used.
      </a>
    </footer>,
    document.body
  )
}

export default Footer

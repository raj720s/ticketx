import {Lato} from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

// const lato = Lato({subsets: ['latin'], weight: ['900']})

function Nav() {
  return (
    <nav>
      <Link href={'/'}>
        <Image src={'/mirae-logo.svg'} alt='mirae logo' width={80} height={20} placeholder='blur' blurDataURL='/mirae-logo.svg' />
      </Link>
      <Link href='/about'>about </Link>
      <Link href='/stocks'>stocks </Link>
    </nav>
  )
}

export default Nav

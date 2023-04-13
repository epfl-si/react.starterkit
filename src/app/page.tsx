'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Base } from '@epfl/epfl-sti-react-library'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Base asideMenuItems={[]}>
      This is a base page
    </Base>
  )
}

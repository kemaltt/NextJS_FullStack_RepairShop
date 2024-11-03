import React from 'react'
import { HomeIcon, File, UsersRound } from 'lucide-react'
import Link from 'next/link'
import { NavButton } from './NavButton'
import { ModeToggle } from './ModeToggle'


export default function Header() {
  return (
    <header className='animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20'>
      <div className='flex h-8 items-center justify-between w-full'>
        <div className='flex items-center gap-2'>
          <NavButton icon={HomeIcon} label='Home' href='/' />
          <Link href='/home' title='Home' className='flex justify-center items-center gap-2 mi-0'>
            <h1 className='hidden sm:block text-xl font-bold m-0 mt-1'>
              Computer Repair Shop
            </h1>
          </Link>
        </div>
        <div className='flex items-center'>
          <NavButton icon={File} label='Tickets' href='/tickets' />
          <NavButton icon={UsersRound} label='Customers' href='/customers' />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

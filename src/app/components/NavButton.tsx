import { LucideIcon } from 'lucide-react'
// import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import { Button } from './ui/Button'

type NavButtonProps = {
  href?: string
  icon: LucideIcon
  label: string
}

export function NavButton({ icon: Icon, label, href }: NavButtonProps) {
  return (
    <Button variant='ghost' size='icon' aria-label={label} title={label} className='rounded-full' asChild >
      {href ? (
        <Link href={href}>
          <Icon />
        </Link>) : (
        <Icon />
      )}
    </Button>
  )
}

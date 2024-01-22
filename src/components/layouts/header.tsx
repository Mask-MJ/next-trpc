import { Command } from 'lucide-react'
import Link from 'next/link'
import { notFound, useSelectedLayoutSegment } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'
import { appConfig } from '@/config/app'
import { navList } from '@/config/nav'
import { cn } from '@/lib/utils'

import MainNav from './main-nav'
import UserAccountNav from './user-account-nav'

export default function LayoutHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b-2 px-4">
      <MainNav />
      <UserAccountNav />
    </header>
  )
}

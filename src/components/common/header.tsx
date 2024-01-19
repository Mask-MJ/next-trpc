import { Command } from 'lucide-react'
import Link from 'next/link'
import { notFound, useSelectedLayoutSegment } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'
import { appConfig } from '@/config/app'
import { navList } from '@/config/nav'
import { getCurrentUser } from '@/lib/session'
import { cn } from '@/lib/utils'

export default async function LayoutHeader() {
  const segment = useSelectedLayoutSegment()
  // const user = await getCurrentUser()
  // console.log('user', user)

  // if (!user) {
  //   return notFound()
  // }

  return (
    <header className="flex h-16 items-center justify-between border-b-2 px-4">
      <div className="flex gap-6 md:gap-10">
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <Command />
          <span className="hidden font-bold sm:inline-block">
            {appConfig.name}
          </span>
        </Link>
        {navList.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={cn(
              'hover:text-foreground/80 flex items-center text-lg font-medium transition-colors sm:text-sm',
              item.href.startsWith(`/${segment}`)
                ? 'text-foreground'
                : 'text-foreground/60'
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <nav>
        <Link
          href="/login"
          className={cn(
            buttonVariants({ variant: 'secondary', size: 'sm' }),
            'px-4'
          )}
        >
          Login
        </Link>
      </nav>
    </header>
  )
}

'use client'

import LayoutHeader from '@/components/common/header'

export default function IndexLayout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <LayoutHeader />
      <main className="flex-1">{children}</main>
    </div>
  )
}

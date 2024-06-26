import { notFound } from 'next/navigation'
import LayoutHeader from '@/components/layouts/header'
import { getCurrentUser } from '@/lib/session'

interface DashboardLayoutProps {
  children?: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <LayoutHeader />
      <main className="flex-1">{children}</main>
    </div>
  )
}

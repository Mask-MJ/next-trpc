import { getCurrentUser } from '@/lib/session'

export default async function navigation() {
  const user = await getCurrentUser()
  console.log('user', user)

  return (
    <>
      <div>222</div>
    </>
  )
}

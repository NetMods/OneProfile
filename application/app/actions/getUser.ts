import { currentUser } from '@clerk/nextjs/server'

export default async function getUser() {
  const user = await currentUser()
  if (!user) {
    return {
      success: false,
    }
  }

  return {
    ...user,
    success: true
  }
}

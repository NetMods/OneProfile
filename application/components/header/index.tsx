import Header from '@/components/header/header'
import Container from '@/components/container'

import { auth } from '@clerk/nextjs/server'

const Navbar = async () => {
  const session = await auth()

  return (
    <Container>
      <Header userId={session.userId} />
    </Container>
  )
}

export default Navbar

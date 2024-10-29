import Header from '@/components/header/header'
import Container from '@/components/container'

import { auth } from '@clerk/nextjs/server'

const { userId } = await auth()
console.log(userId)

const Navbar = () => {
  return (

    <Container>
      <Header userId={userId} />
    </Container>
  )
}

export default Navbar

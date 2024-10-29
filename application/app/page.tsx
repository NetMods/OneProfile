'use client'
import Container from '@/components/container'
import DockBar from '@/components/footer/dockBar'
import Profiles from '@/components/profiles'
import ClientOnly from '@/components/client-only'

const Home = () => {
  return (
    <ClientOnly>
      <Container>
        <Profiles />
      </Container>
      <Container>
        <DockBar />
      </Container>
    </ClientOnly>
  )
}

export default Home

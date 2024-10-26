'use client'
import MainPage from '@/components/main-page'
import Container from '@/components/container'
import DockBar from '@/components/footer/dockBar'
import Profiles from '@/components/profiles'
import ClientOnly from '@/components/client-only'
import Header from '@/components/header/header'

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

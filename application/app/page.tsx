'use client'
import MainPage from '@/components/main-page'
import Container from '@/components/container'
import ThemeSwitcher from '@/components/theme-switcher'
import DockBar from '@/components/footer/dockBar'
import Profiles from '@/components/profiles'
import ClientOnly from '@/components/client-only'

const Home = () => {
  return (
    <ClientOnly>
      <MainPage>
        <Container >
          <div className="flex justify-between p-3">
            <ThemeSwitcher />
          </div>
        </Container>

        <Container >
          <Profiles />
        </Container>

        <Container >
          <DockBar />
        </Container>
      </MainPage>
    </ClientOnly>
  )
}

export default Home

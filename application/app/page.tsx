"use client";
import ClientOnly from "@/components/client-only";
import MainPage from "@/components/main-page";
import Container from "@/components/container";
import ThemeSwitcher from "@/components/theme-switcher";
import DockBar from "@/components/footer/dockBar";
import Profiles from '@/components/profiles'

const Home = () => {
  return (
    <ClientOnly>
      <MainPage>
        <Container small>
          <div className="flex justify-between p-3">
            <ThemeSwitcher />
          </div>
        </Container>
        <Container large>
          <Profiles />
        </Container>
        <Container small>
            <DockBar/>
        </Container>
      </MainPage>
    </ClientOnly>
  )
}

export default Home

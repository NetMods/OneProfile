"use client";
import DropDown from "../components/DropDown";
import ClientOnly from "@/components/client-only";
import MainPage from "@/components/main-page";
import Container from "@/components/container";
import ThemeSwitcher from "@/components/theme-switcher";

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
          <div className="">body</div>
        </Container>
        <Container small>
          <div className="">footer</div>
        </Container>
      </MainPage>
    </ClientOnly>
  );
};

export default Home;

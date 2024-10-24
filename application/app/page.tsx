"use client";
import ClientOnly from "@/components/clientonly";
import MainPage from "@/components/mainpage";
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

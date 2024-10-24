"use client";
import ClientOnly from "@/components/clientonly";
import MainPage from "@/components/mainpage";
import Container from "@/components/container";

const Home = () => {
  return (
    <ClientOnly>
      <MainPage>
        <Container small>
          <div className="flex flex-row gap-2">header</div>
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

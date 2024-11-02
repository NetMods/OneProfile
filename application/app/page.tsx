import Container from '@/components/container'
import DockBar from '@/components/footer'
import Showcase from '@/components/showcase'
import ClientOnly from '@/components/client-only'
import Navbar from '@/components/header'

const Home = () => {
  return (
    <ClientOnly>
      <div className='flex flex-col justify-between h-full'>
        <Navbar />
        <Container>
          <Showcase />
        </Container>
        <Container>
          <DockBar />
        </Container>
      </div>
    </ClientOnly>
  )
}

export default Home

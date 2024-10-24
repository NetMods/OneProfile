'use client'
interface MainPageProps {
  children: React.ReactNode
}

const MainPage: React.FC<MainPageProps> = ({ children }) => {
  return (
    <div className={`h-[100vh] flex flex-col justify-center items-center bg-bkg`}>{children}</div>
  )
}

export default MainPage

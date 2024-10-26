'use client'
interface MainPageProps {
  children: React.ReactNode
}

const MainPage: React.FC<MainPageProps> = ({ children }) => {
  return (
    <div className={`flex flex-col h-full justify-between`}>{children}</div>
  )
}

export default MainPage

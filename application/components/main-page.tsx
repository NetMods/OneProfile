'use client'
interface MainPageProps {
  children: React.ReactNode
}

const MainPage: React.FC<MainPageProps> = ({ children }) => {
  return (
    <div className={``}>{children}</div>
  )
}

export default MainPage

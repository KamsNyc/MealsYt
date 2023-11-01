import Navbar from './components/Navbar'
import BasicSidebar from './components/BasicSidebar'
import Feed from './components/Feed'

export default function Home() {
  return (
    <main className="w-full h-full flex">
      {/* SIDEBAR */}
      <div className="flex">

        <BasicSidebar />

      
      </div>

      {/* FEED */}
      <div className="flex-1">
        <Feed />
      </div>
    </main>
  ) 
}

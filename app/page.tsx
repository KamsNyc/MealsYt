import Image from 'next/image'
import Navbar from './components/Navbar'
import BasicSidebar from './components/BasicSidebar'
import Feed from './components/Feed'

export default function Home() {
  return (
    <main className="w-full h-full flex">
    {/* SIDEBAR */}
    <BasicSidebar />

    <section className="flex-1">
  

      {/* FEED */}
      <Feed />
    </section>
  </main>
  ) 
}
                    
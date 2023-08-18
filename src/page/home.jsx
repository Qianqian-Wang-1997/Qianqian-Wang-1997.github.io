import Sidebar from '../components/Sidebar'
import About from "./About"
import Education from './Education'
import Experience from './Experience'
import Life from './Life'

function Home() {
  return (
    <div className="font-Ubuntu fixed flex w-full h-full">
      <div className="w-16 md:w-48 lg:w-64">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 overflow-auto bg-purple" style={{ scrollBehavior: "smooth" }}>
        <About></About>
        <Experience></Experience>
        <Education></Education>
        <Life></Life>
      </div>
    </div>
  )
}

export default Home

import Sidebar from '../../components/Sidebar'
import About from "./About"
import Education from './Education'
import Experience from './Experience'
import { Outlet } from 'react-router-dom'
// import Life from './Life'

function Home() {
  return (
    <div className="font-Ubuntu">
      <div className="flex-1 overflow-scroll bg-purple">
        <About></About>
        <Experience></Experience>
        <Education></Education>
      </div>
    </div>
  )
}

export default Home

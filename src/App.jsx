import './App.scss'
import About from "./components/About"
import Education from './components/Education'
import Experience from './components/Experience'
import Project from './components/Projects'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="font-Ubuntu fixed flex w-full h-full">
        <div className="w-16 md:w-48 lg:w-64">
          <Sidebar></Sidebar>
        </div>
        <div className="flex-1 overflow-auto" style={{scrollBehavior: "smooth"}}>
          <About></About>
          <Experience></Experience>
          <Education></Education>
          <Project></Project>
        </div>
    </div>
  )
}

export default App

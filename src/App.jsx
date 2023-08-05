import './App.scss'
import About from "./components/About"
import Experience from './components/Experience'
import Project from './components/Projects'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="font-Ubuntu min-h-screen w-full">
      <div className="flex flex-row w-full">
        <div className="flex-none h-full">
          <Sidebar></Sidebar>
        </div>
        <div className="flex-auto h-screen overflow-y-scroll">
          <About></About>
          <Project></Project>
          <Experience></Experience>
        </div>
      </div>
    </div>
  )
}

export default App

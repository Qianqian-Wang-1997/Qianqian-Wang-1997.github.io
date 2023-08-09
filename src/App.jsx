import './App.scss'
import About from "./components/About"
import Education from './components/Education'
import Experience from './components/Experience'
import Project from './components/Projects'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="font-Ubuntu min-h-screen w-screen">
      <div className="flex flex-row">
        <div className="flex-none 
         w-64 md:shadow transform -translate-x-full 
         md:translate-x-0 transition-transform duration-150 ease-in">
          <Sidebar></Sidebar>
        </div>
        <div className="flex-auto overflow-y-scroll 
        main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
          <About></About>
          <Experience></Experience>
          <Education></Education>
          <Project></Project>
        </div>
      </div>
    </div>
  )
}

export default App

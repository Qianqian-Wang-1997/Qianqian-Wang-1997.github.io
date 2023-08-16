import './App.scss'
import { Route, Routes } from "react-router-dom"
import Home from "./page/home"
import About from "./components/About"
import Education from './components/Education'
import Experience from './components/Experience'
import Project from './components/Projects'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      {/* <Route path="/" */}
    </Routes>
  )
}

export default App

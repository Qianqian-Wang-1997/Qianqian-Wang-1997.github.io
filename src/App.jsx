import './App.scss'
import { Route, Routes } from "react-router-dom"
import Home from "./page/portfolio/Home"
import Login from "./page/user/Login"
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="font-Ubuntu fixed flex w-full h-full">
      <div className="w-16 md:w-48 lg:w-64">
        <Sidebar></Sidebar>
      </div>
      <div className="flex-1 overflow-auto bg-purple" style={{ scrollBehavior: "smooth" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

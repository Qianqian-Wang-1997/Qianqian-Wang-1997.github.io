import './App.scss'
import { Route, Routes } from "react-router-dom"
import Home from "./page/home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>} />
      {/* <Route path="/" */}
    </Routes>
  )
}

export default App

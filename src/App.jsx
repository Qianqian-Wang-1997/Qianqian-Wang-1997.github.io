import './App.scss'
import { Route, Routes } from "react-router-dom"
import { AuthProvider } from './contexts/useAuth'
import Sidebar from './components/Sidebar'
import Home from "./page/portfolio/Home"
import Login from "./page/user/Login"
import Signup from './page/user/Signup'
import ForgotPassword from './page/user/ForgotPassword'

function App() {
  return (
    <div className="font-Ubuntu fixed flex w-full h-full">
      <AuthProvider>

        <div className="w-16 md:w-48 lg:w-64">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-auto bg-purple" style={{ scrollBehavior: "smooth" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
      </AuthProvider>

    </div>
  )
}

export default App

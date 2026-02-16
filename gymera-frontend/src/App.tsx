import './App.css'
import "dotenv"
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Login from './pages/login/page'
import Register from './pages/register/page'

function App() {
  console.log("sdfsd")
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  )

}

export default App

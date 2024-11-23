import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../views/Dashboard.jsx"
import { Home } from "../views/Home.jsx"
<<<<<<< HEAD
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";
=======
import Login from "../config/login.jsx";
import Register from "../config/Register.jsx";
>>>>>>> 54aa1f863a7ee83c17e9562cb2104fb3d4574986

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export { AppRouter }
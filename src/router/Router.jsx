import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../views/Dashboard.jsx"
import { Home } from "../views/Home.jsx"
import Login from "../components/Login.jsx";
import Register from "../components/Register.jsx";

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
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import DoctorList from "./components/DoctorList";
import AppointmentForm from "./components/AppointmentForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/appointment" element={<AppointmentForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
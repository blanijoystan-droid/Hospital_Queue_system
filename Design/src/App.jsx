import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Hospitals from "./pages/Hospitals";
import BookAppointment from "./pages/BookAppointment";
import QueueStatus from "./pages/QueueStatus";
import ScanQR from "./pages/ScanQR";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/hospitals" element={<Hospitals />} />

        <Route path="/bookAppointment" element={<BookAppointment />} />

        <Route path="/queueStatus" element={<QueueStatus />} />

        <Route path="/scanQR" element={<ScanQR />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

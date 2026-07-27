import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
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
        <Route path="/dashboard" element={<PatientDashboard />} />
        <Route path="/hospitals" element={<Hospitals />} />
<<<<<<< HEAD

        {/* ✅ FIXED ROUTES */}
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/queue-status" element={<QueueStatus />} />
        <Route path="/scan-qr" element={<ScanQR />} />

=======
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/queue" element={<QueueStatus />} />
        <Route path="/scan" element={<ScanQR />} />
>>>>>>> 9cae36acf6d94ad49844bcfd0a792f3f26d73b9e
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            QueueCare
          </h1>
          <p className="mt-4 text-sm leading-relaxed">
            Smart hospital queue management system designed to reduce waiting time 
            and provide a seamless patient experience with real-time tracking.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h2 className="text-white font-semibold mb-4">Navigation</h2>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-cyan-400">Home</Link></li>
            <li><Link to="/login" className="hover:text-cyan-400">Login</Link></li>
            <li><Link to="/register" className="hover:text-cyan-400">Register</Link></li>
            <li><Link to="/dashboard" className="hover:text-cyan-400">Dashboard</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-white font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li><Link to="/hospitals" className="hover:text-cyan-400">Hospitals</Link></li>
            <li><Link to="/book" className="hover:text-cyan-400">Book Appointment</Link></li>
            <li><Link to="/queue" className="hover:text-cyan-400">Queue Status</Link></li>
            <li><Link to="/scan" className="hover:text-cyan-400">Scan QR</Link></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h2 className="text-white font-semibold mb-4">Contact</h2>
          <p className="text-sm">support@queuecare.com</p>
          <p className="text-sm">+91 9876543210</p>

          <div className="flex gap-4 mt-4 text-lg">
            <FaFacebook className="hover:text-cyan-400 cursor-pointer" />
            <FaTwitter className="hover:text-cyan-400 cursor-pointer" />
            <FaInstagram className="hover:text-cyan-400 cursor-pointer" />
            <FaLinkedin className="hover:text-cyan-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} QueueCare. All rights reserved.
      </div>
    </footer>
  );
}
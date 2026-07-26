import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Activity,
  Bell,
  UserCircle,
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <Activity className="text-cyan-400" size={32} />

          <span className="text-2xl font-bold text-white">
            QueueCare
          </span>
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Home
          </Link>

          <Link
            to="/book"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Book
          </Link>

          <Link
            to="/queue"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Queue
          </Link>

          <Link
            to="/scan"
            className="text-gray-300 hover:text-cyan-400 transition"
          >
            Scan QR
          </Link>

          <Bell
            className="text-gray-300 cursor-pointer hover:text-cyan-400"
            size={22}
          />

          <UserCircle
            className="text-gray-300 cursor-pointer hover:text-cyan-400"
            size={30}
          />

        </div>

        {/* Mobile Button */}

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30}/> : <Menu size={30}/>}
        </button>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (

        <div className="md:hidden bg-slate-900 px-6 py-5 space-y-4">

          <Link
            to="/"
            className="block text-white"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/book"
            className="block text-white"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </Link>

          <Link
            to="/queue"
            className="block text-white"
            onClick={() => setMenuOpen(false)}
          >
            Queue Status
          </Link>

          <Link
            to="/scan"
            className="block text-white"
            onClick={() => setMenuOpen(false)}
          >
            Scan QR
          </Link>

        </div>

      )}

    </nav>
  );
}
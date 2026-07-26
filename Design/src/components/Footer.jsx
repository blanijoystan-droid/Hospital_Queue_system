import {
  Hospital,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center">
                <Hospital className="text-black" />
              </div>

              <h2 className="text-2xl font-bold text-white">
                QueueCare
              </h2>
            </div>

            <p className="text-gray-400 mt-6 leading-7">
              Smart Hospital Queue Management System that helps
              patients save time through online appointments,
              QR check-ins and live queue tracking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-cyan-400 cursor-pointer transition">
                Home
              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">
                Hospitals
              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">
                Book Appointment
              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">
                Live Queue
              </li>

              <li className="hover:text-cyan-400 cursor-pointer transition">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="text-cyan-400" />
                support@queuecare.com
              </div>

              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="text-cyan-400" />
                +91 9876543210
              </div>

              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-cyan-400 mt-1" />
                Mangalore, Karnataka, India
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-bold text-xl mb-6">
              Connect
            </h3>

            <p className="text-gray-400 mb-6">
              Follow us for updates and innovations in
              digital healthcare.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaGithub className="text-white text-xl" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaLinkedin className="text-white text-xl" />
              </a>

              <a
                href="#"
                className="w-12 h-12 rounded-xl bg-slate-800 hover:bg-cyan-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram className="text-white text-xl" />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500 text-center md:text-left">
            © 2026 QueueCare • Built with ❤️ for Smart Healthcare
          </p>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 w-12 h-12 rounded-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center shadow-lg"
          >
            <ArrowUp className="text-black" />
          </button>

        </div>
      </div>
    </footer>
  );
}

